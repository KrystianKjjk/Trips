using System;
using System.Collections.Generic;
using Trips.Models.Data;

namespace Trips.Models.Services
{
    public interface ITripService
    {
        List<Trip> GetAllTrips();
        Trip GetTripById(int id);
        void UpdateTrip(int id, Trip updatedTrip);
        void Delete(int id);
        void AddTrip(Trip trip);
    }
}
