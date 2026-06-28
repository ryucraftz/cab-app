import { TrendingUp } from 'lucide-react';
import { ActivityCard } from '@stitch/examples/gold-standard-card';
import { cardData } from '@/data/mockData';

export function RecentRides() {
  return (
    <section id="activities" className="mb-8 pt-16 border-t border-gray-100">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <div className="inline-flex items-center gap-2 text-primary font-semibold text-sm tracking-wider uppercase mb-2">
          <TrendingUp className="h-4 w-4" />
          <span>Live Verification</span>
        </div>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900">
          Recent Rides
        </h2>
        <p className="text-slate-500 text-sm mt-3">
          This feed displays recent Pune-Mumbai trips. 
        </p>
      </div>

      {/* Stitch Components Container */}
      <div className="max-w-3xl mx-auto space-y-4 bg-slate-50 p-6 md:p-8 rounded-3xl border border-gray-200 shadow-sm">
        <div className="flex items-center justify-between pb-4 border-b border-gray-200">
          <span className="text-xs text-slate-700 font-bold uppercase tracking-widest flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            Live Log Feeds
          </span>
          <span className="text-[10px] text-slate-500 bg-white px-2 py-0.5 rounded border border-gray-200">
            3 Recent Trips
          </span>
        </div>

        {/* Loop through mockData and render the globally mapped ActivityCard component! */}
        {cardData.map((activity) => (
          <div key={activity.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <ActivityCard 
              id={activity.id}
              username={activity.username}
              action={activity.action}
              timestamp={activity.timestamp}
              avatarUrl={activity.avatarUrl}
              repoName={activity.repoName}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
