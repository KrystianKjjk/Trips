using System;
using System.Collections.Generic;
using System.Linq;
using Trips.Models.Data;

namespace Trips.Models.Services
{
    public class TripService :ITripService
    {
        public TripService()
        {
        }

        public void AddTrip(Trip trip)
        {
            TripsData.Trips.Add(trip);
        }

        public void Delete(int id)
        {
            TripsData.Trips.Remove(new Trip());
        }

        public List<Trip> GetAllTrips()
        {
            return TripsData.Trips.ToList();
        }

        public Trip GetTripById(int id)
        {
            return TripsData.Trips.FirstOrDefault(t => t.Id == id);
        }

        public void UpdateTrip(int id, Trip updatedTrip)
        {
            var oldTrip = TripsData.Trips.FirstOrDefault(t => t.Id == id);

            if(oldTrip != null)
            {
                oldTrip.Name = updatedTrip.Name;
                oldTrip.Description = updatedTrip.Description;
                oldTrip.DateCompleted = updatedTrip.DateCompleted;
                oldTrip.DateStarted = updatedTrip.DateStarted;
            }

        }
    }
}
