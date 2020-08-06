using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Trips.Models.Data;
using Trips.Models.Services;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Trips.Controllers
{
    [Route("api/[controller]")]
    public class TripsController : Controller
    {
        private readonly ITripService _tripService;

        public TripsController(ITripService tripService)
        {
            this._tripService = tripService;
        }
        // GET: api/values
        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                //throw new Exception();
                var allTrips = _tripService.GetAllTrips();
                return Ok(allTrips);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var trip = _tripService.GetTripById(id);
            return Ok(trip);
        }

        // POST api/values
        [HttpPost]
        public IActionResult Post([FromBody] Trip trip)
        {
            if(trip != null)
            {
                _tripService.AddTrip(trip);
            }
            return Ok();
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] Trip trip)
        {
            _tripService.UpdateTrip(id, trip);

            return Ok(trip);
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _tripService.Delete(id);

            return Ok();
        }
    }
}
