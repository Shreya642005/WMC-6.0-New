"use client"

import { useState, useEffect, useMemo } from "react";
import { getMissions, addMission } from "@/lib/missions";
import MissionCard from "@/components/MissionCard";
import MissionFilters from "@/components/MissionFilters";
import MissionMap from "@/components/MissionMap";
import MissionNotification from "@/components/MissionNotification";
import { Button } from "@/components/ui/Button";
import { Plus, Zap } from "lucide-react";

export default function AllMissionsPage() {
  const [missions, setMissions] = useState([])
  const [filters, setFilters] = useState({
    urgency: "all",
    status: "all",
    area: "all",
    sortBy: "date",
    sortOrder: "desc",
  })
  const [viewMode, setViewMode] = useState("cards")
  const [selectedMissionId, setSelectedMissionId] = useState(null)
  const [newMissionNotification, setNewMissionNotification] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    try {
      const loadedMissions = getMissions()
      setMissions(loadedMissions)
      setIsLoaded(true)
    } catch (error) {
      console.error("Failed to load missions:", error)
      setIsLoaded(true)
    }
  }, [])

  const filteredMissions = useMemo(() => {
    if (!missions.length) return []

    const filtered = missions.filter((mission) => {
      if (filters.urgency !== "all" && mission.urgency !== filters.urgency) return false
      if (filters.status !== "all" && mission.status !== filters.status) return false
      if (filters.area !== "all" && mission.area !== filters.area) return false
      return true
    })

    filtered.sort((a, b) => {
      let comparison = 0
      switch (filters.sortBy) {
        case "date":
          comparison = new Date(a.date + " " + a.time).getTime() - new Date(b.date + " " + b.time).getTime()
          break
        case "urgency":
          const urgencyOrder = { low: 1, medium: 2, high: 3, critical: 4 }
          comparison = urgencyOrder[a.urgency] - urgencyOrder[b.urgency]
          break
        case "area":
          comparison = a.area.localeCompare(b.area)
          break
        default:
          comparison = 0
      }
      return filters.sortOrder === "desc" ? -comparison : comparison
    })

    return filtered
  }, [missions, filters])

  const activeMissionsCount = missions.filter((m) => m.status === "active").length

  const handleMissionSelect = (mission) => {
    setSelectedMissionId(mission.id)
    if (viewMode === "map") {
      setViewMode("cards")
    }
    setTimeout(() => {
      const element = document.getElementById(`mission-${mission.id}`)
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" })
      }
    }, 100)
  }

  const addDemoMission = () => {
    const demoMission = {
      id: Date.now().toString(),
      title: "Rhino Rampage Downtown",
      description: "The Rhino is causing massive property damage in the financial district. Multiple vehicles overturned.",
      date: new Date().toISOString().split("T")[0],
      time: new Date().toLocaleTimeString("en-US", { hour12: false, hour: "2-digit", minute: "2-digit" }),
      location: "Wall Street",
      coordinates: [40.7074, -74.0113],
      urgency: "critical",
      status: "active",
      area: "Manhattan",
    }

    try {
      const updatedMissions = addMission(demoMission)
      setMissions(updatedMissions)
      setNewMissionNotification(demoMission)
    } catch (error) {
      console.error("Failed to add mission:", error)
    }
  }

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-[#151414] flex items-center justify-center">
        {/* Background elements for loading state */}
        <img
          src="/images/BackgroundLogo.png"
          alt="Background Logo"
          className="fixed left-1/2 top-1/2 w-[400px] opacity-30 -translate-x-1/2 -translate-y-1/2 z-0"
        />
        <div className="text-center relative z-10">
          <div className="w-16 h-16 border-4 border-red-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white">Loading mission data...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="all-missions-page min-h-screen bg-[#151414] relative">
      {/* Spider-Man Background Elements */}
      <img
        src="/images/BackgroundLogo.png"
        alt="Background Logo"
        className="fixed left-1/2 top-1/2 w-[400px] opacity-20 -translate-x-1/2 -translate-y-1/2 z-0"
      />
      <img
        src="/images/web2.png"
        className="fixed top-0 left-0 w-[250px] opacity-20 z-0"
        alt="web-top-left"
      />
      <img
        src="/images/web1.png"
        className="fixed top-0 right-0 w-[180px] opacity-15 z-0 pointer-events-none"
        alt="web-top-right"
      />

      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" />
              </svg>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white">All Missions</h1>
          </div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Your friendly neighborhood mission control center. Track, monitor, and manage all Spider-Man operations
            across New York City.
          </p>

          <div className="mt-6 flex items-center justify-center gap-4 flex-wrap">
            <div className="bg-red-600/20 border border-red-500/30 rounded-lg px-4 py-2 flex items-center gap-2">
              <Zap className="w-5 h-5 text-red-400" />
              <span className="text-red-400 font-medium">🕸️ {activeMissionsCount} active missions and counting...</span>
            </div>
            <Button onClick={addDemoMission} className="bg-red-600 hover:bg-red-700 text-white">
              <Plus className="w-4 h-4 mr-2" />
              Add Demo Mission
            </Button>
          </div>
        </div>

        <MissionFilters
          filters={filters}
          onFiltersChange={setFilters}
          totalMissions={filteredMissions.length}
          viewMode={viewMode}
          onViewModeChange={setViewMode}
        />

        {viewMode === "cards" ? (
          <div className="missions-grid grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredMissions.map((mission, index) => (
              <div
                key={mission.id}
                id={`mission-${mission.id}`}
                className="mission-card-wrapper"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <MissionCard
                  mission={mission}
                  isHighlighted={mission.id === selectedMissionId}
                  onClick={() => setSelectedMissionId(mission.id)}
                />
              </div>
            ))}
          </div>
        ) : (
          <MissionMap
            missions={filteredMissions}
            selectedMissionId={selectedMissionId}
            onMissionSelect={handleMissionSelect}
          />
        )}

        {filteredMissions.length === 0 && (
          <div className="empty-state text-center py-12">
            <div className="w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-12 h-12 text-gray-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">No missions found</h3>
            <p className="text-gray-400">Try adjusting your filters or check back later for new missions.</p>
          </div>
        )}
      </div>

      <MissionNotification mission={newMissionNotification} onClose={() => setNewMissionNotification(null)} />
    </div>
  )
}
