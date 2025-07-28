"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, AlertTriangle, CheckCircle, Loader } from "lucide-react"
import { useState, useEffect } from "react"

const urgencyStyles = {
  low: "bg-green-500/20 text-green-400 border-green-500/30",
  medium: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  high: "bg-orange-500/20 text-orange-400 border-orange-500/30",
  critical: "bg-red-500/20 text-red-400 border-red-500/30 animate-pulse",
}

const statusStyles = {
  active: "bg-red-500/20 text-red-400 border-red-500/30",
  "in-progress": "bg-blue-500/20 text-blue-400 border-blue-500/30",
  completed: "bg-green-500/20 text-green-400 border-green-500/30",
}

function StatusIcon({ status }) {
  if (status === "active") return <AlertTriangle className="w-4 h-4" />
  if (status === "in-progress") return <Loader className="w-4 h-4 animate-spin" />
  if (status === "completed") return <CheckCircle className="w-4 h-4" />
  return null
}

export default function MissionCard({ mission, isHighlighted = false, onClick }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <Card
      className={`
        mission-card relative overflow-hidden cursor-pointer transition-all duration-300 transform
        bg-gray-900/50 border-gray-700/50 backdrop-blur-sm
        hover:scale-105 hover:shadow-xl hover:shadow-red-500/20
        ${isHighlighted ? "ring-2 ring-red-500 shadow-lg shadow-red-500/30" : ""}
        ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}
      `}
      onClick={onClick}
      data-urgency={mission.urgency}
    >
      {/* Spider web overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-500/10 to-transparent" />
        <svg className="absolute top-2 right-2 w-8 h-8 text-red-500/20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" />
        </svg>
      </div>

      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <h3 className="text-lg font-bold text-white">{mission.title}</h3>
          <div className="flex gap-2">
            <Badge className={urgencyStyles[mission.urgency]}>{mission.urgency}</Badge>
            <Badge className={statusStyles[mission.status]}>
              <StatusIcon status={mission.status} />
              <span className="ml-1 capitalize">{mission.status.replace("-", " ")}</span>
            </Badge>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-3">
        <p className="text-gray-300 text-sm leading-relaxed">{mission.description}</p>

        <div className="flex items-center gap-4 text-sm text-gray-400">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>
              {mission.date} at {mission.time}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            <span>{mission.location}</span>
          </div>
        </div>

        {mission.urgency === "critical" && (
          <div className="flex items-center gap-2 text-red-400 text-sm font-medium">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-ping" />
            <span>URGENT: Immediate attention required!</span>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
