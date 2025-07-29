import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/Badge';
import { AlertTriangle, CheckCircle } from 'lucide-react';

const MissionPreview = () => {
  const previewMissions = [
    {
      id: 1,
      title: "Bank Robbery Intervention",
      status: "completed",
      urgency: "high",
      date: "2023-11-15",
      location: "Manhattan"
    },
    {
      id: 2,
      title: "Rhino Rampage",
      status: "active",
      urgency: "critical",
      date: "2023-11-16",
      location: "Queens"
    }
  ];

  return (
    <section className="min-h-screen py-20 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold text-white font-['Anton'] tracking-wide">
              RECENT MISSIONS
            </h2>
            <Link 
              to="/missions" 
              className="text-red-400 hover:text-red-300 transition flex items-center gap-2"
            >
              View All Archives →
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {previewMissions.map(mission => (
              <div 
                key={mission.id} 
                className="bg-black/30 border border-gray-800 rounded-xl p-6 hover:border-red-400/30 transition-all backdrop-blur-sm"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white">{mission.title}</h3>
                  <Badge 
                    variant={mission.urgency === "critical" ? "destructive" : "secondary"}
                    className="flex items-center gap-1"
                  >
                    {mission.status === "active" ? (
                      <AlertTriangle className="h-4 w-4" />
                    ) : (
                      <CheckCircle className="h-4 w-4" />
                    )}
                    <span className="capitalize">{mission.status}</span>
                  </Badge>
                </div>
                
                <div className="flex gap-4 text-sm text-gray-400 mt-4">
                  <span>{mission.date}</span>
                  <span>•</span>
                  <span>{mission.location}</span>
                </div>
                
                <Link 
                  to={`/missions/${mission.id}`} 
                  className="inline-block mt-6 text-red-400 hover:text-red-300 text-sm font-medium"
                >
                  View Mission Details →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionPreview;