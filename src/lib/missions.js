import { apiGet, apiPost } from '@/lib/api'

export const getMissions = async () => {
  return apiGet('/api/missions')
}

export const addMission = async (mission) => {
  return apiPost('/api/missions', mission)
}