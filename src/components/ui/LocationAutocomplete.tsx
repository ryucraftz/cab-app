import { useState, useEffect, useRef } from 'react';
import { MapPin, Navigation, Loader2 } from 'lucide-react';

interface LocationAutocompleteProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (val: string) => void;
  error?: string;
  showPinButton?: boolean;
}

interface MapboxFeature {
  id: string;
  place_name: string;
}

export function LocationAutocomplete({ 
  label, 
  placeholder, 
  value, 
  onChange, 
  error,
  showPinButton = false 
}: LocationAutocompleteProps) {
  const [query, setQuery] = useState(value);
  const [suggestions, setSuggestions] = useState<MapboxFeature[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isPinning, setIsPinning] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Sync external value changes (like when the form resets)
  useEffect(() => {
    setQuery(value);
  }, [value]);

  // Click outside to close dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Fetch suggestions from Mapbox API
  useEffect(() => {
    const fetchPlaces = async () => {
      if (query.length < 3) {
        setSuggestions([]);
        return;
      }

      const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;
      if (!MAPBOX_TOKEN) {
        console.warn("Missing VITE_MAPBOX_ACCESS_TOKEN. Autocomplete disabled.");
        return;
      }

      setIsLoading(true);
      try {
        // Limit search to India (country=in) for better cab routing results
        const endpoint = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(query)}.json?country=in&autocomplete=true&access_token=${MAPBOX_TOKEN}`;
        const res = await fetch(endpoint);
        const data = await res.json();
        setSuggestions(data.features || []);
      } catch (err) {
        console.error("Mapbox Autocomplete Error:", err);
      } finally {
        setIsLoading(false);
      }
    };

    const timeoutId = setTimeout(() => {
      // Only fetch if the query is different from the actual committed value (meaning user is typing)
      if (query !== value) {
        fetchPlaces();
      }
    }, 400); // 400ms debounce

    return () => clearTimeout(timeoutId);
  }, [query, value]);

  // Handle GPS Pinning using Native Browser Geolocation + Mapbox Reverse Geocoding
  const handlePinLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return;
    }

    const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;
    if (!MAPBOX_TOKEN) {
      alert("Mapbox API Token is missing. Cannot reverse geocode.");
      return;
    }

    setIsPinning(true);
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          const endpoint = `https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?access_token=${MAPBOX_TOKEN}`;
          const res = await fetch(endpoint);
          const data = await res.json();
          
          if (data.features && data.features.length > 0) {
            const address = data.features[0].place_name;
            setQuery(address);
            onChange(address);
            setIsOpen(false);
          } else {
            alert("Could not determine address from coordinates.");
          }
        } catch (err) {
          console.error("Reverse Geocoding Error:", err);
          alert("Failed to find address.");
        } finally {
          setIsPinning(false);
        }
      },
      (err) => {
        console.error("Geolocation Error:", err);
        alert("Could not get your location. Please ensure location permissions are granted.");
        setIsPinning(false);
      },
      { enableHighAccuracy: true }
    );
  };

  return (
    <div className="space-y-2 relative" ref={wrapperRef}>
      <div className="flex items-center justify-between">
        <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
          <MapPin className="w-4 h-4 text-slate-400" /> {label}
        </label>
        
        {showPinButton && (
          <button 
            type="button" 
            onClick={handlePinLocation}
            disabled={isPinning}
            className="text-[11px] font-bold uppercase tracking-wider flex items-center gap-1 text-primary hover:text-primary-dark transition-colors"
          >
            {isPinning ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Navigation className="w-3.5 h-3.5" />}
            Pin Location
          </button>
        )}
      </div>

      <div className="relative">
        <input 
          type="text" 
          placeholder={placeholder}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            onChange(e.target.value); // Sync with react-hook-form
            setIsOpen(true);
          }}
          onFocus={() => {
            if (suggestions.length > 0) setIsOpen(true);
          }}
          className={`w-full bg-slate-50 border ${error ? 'border-red-500' : 'border-gray-200'} rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all`}
        />
        {isLoading && (
          <div className="absolute right-4 top-1/2 -translate-y-1/2">
            <Loader2 className="w-4 h-4 animate-spin text-slate-400" />
          </div>
        )}
      </div>

      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}

      {/* Autocomplete Dropdown */}
      {isOpen && suggestions.length > 0 && (
        <div className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-xl shadow-xl max-h-60 overflow-y-auto">
          {suggestions.map((suggestion) => (
            <button
              key={suggestion.id}
              type="button"
              className="w-full text-left px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 border-b border-gray-100 last:border-0 transition-colors truncate"
              onClick={() => {
                setQuery(suggestion.place_name);
                onChange(suggestion.place_name); // Sync with react-hook-form
                setIsOpen(false);
              }}
            >
              <MapPin className="w-3.5 h-3.5 inline-block mr-2 text-slate-400" />
              {suggestion.place_name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
