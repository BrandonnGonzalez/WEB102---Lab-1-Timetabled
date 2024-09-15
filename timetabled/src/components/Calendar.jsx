import React from "react";
import Event from './Event';

const Calendar = () => {
  return (
    <div className="Calendar">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Sunday</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="time">8 am</td>
            <Event event='Morning Surf' location='Malibu Beach' color='blue'/>
            <Event event='Yoga Session' location='Runyon Canyon' color='green'/>
            <td></td>
            <Event event='Hike' location='Griffith Park' color='green'/>
            <td></td>
            <td></td>
            <Event event='Breakfast' location='The Butcher’s Daughter' color='pink'/>
            <td></td>
          </tr>

          <tr>
            <td className="time">9 am</td>
            <Event event='Brunch' location='Urth Caffé' color='pink'/>
            <Event event='Bike Ride' location='Santa Monica Pier' color='green'/>
            <Event event='Art Walk' location='Venice Beach' color='blue'/>
            <td></td>
            <Event event='Visit' location='The Getty Museum' color='blue'/>
            <Event event='Brunch' location='The Ivy' color='pink'/>
            <Event event='Coffee Break' location='Alfred Coffee' color ='green'/>
          </tr>

          <tr>
            <td className="time">10 am</td>
            <td></td>
            <Event event='Disneyland' location='Anaheim' color='yellow'/>
            <Event event='Shopping' location='Rodeo Drive' color='pink'/>
            <Event event='Tour' location='Hollywood Walk of Fame' color='blue'/>
            <td></td>
            <td></td>
            <Event event='Visit' location='La Jolla Cove' color='blue'/>
          </tr>

          <tr>
            <td className="time">11 am</td>
            <td></td>
            <Event event='Beach Day' location='Laguna Beach' color='blue'/>
            <td></td>
            <Event event='Explore' location='Los Angeles County Museum of Art (LACMA)' color='blue'/>
            <Event event='Brunch' location='Blu Jam Café' color='pink'/>
            <td></td>
            <Event event='Tour' location='San Diego Zoo' color='yellow'/>
          </tr>

          <tr>
            <td className="time">12 pm</td>
            <Event event='Lunch' location='Nobu Malibu' color='pink'/>
            <td></td>
            <Event event='Lunch' location='In-N-Out Burger' color='pink'/>
            <td></td>
            <Event event='Visit' location='Hollywood Sign' color='blue'/>
            <Event event='Lunch' location='Philippe The Original' color='pink'/>
            <Event event='Explore' location='Balboa Park' color='blue'/>
            <td></td>
          </tr>

          <tr>
            <td className="time">1 pm</td>
            <Event event='Wine Tasting' location='Temecula Valley' color='purple'/>
            <Event event='Explore' location='Santa Barbara Mission' color='blue'/>
            <td></td>
            <td></td>
            <Event event='Visit' location='Universal Studios' color='yellow'/>
            <Event event='Picnic' location='The Huntington Library' color='green'/>
            <td></td>
            <Event event='Shopping' location='Fashion Valley Mall' color='pink'/>
          </tr>

          <tr>
            <td className="time">2 pm</td>
            <Event event='Lunch' location='The Old Place Cornell' color='pink'/>
            <Event event='Hiking' location='Topanga State Park' color='green'/>
            <td></td>
            <Event event='Explore' location='The Broad Museum' color='blue'/>
            <td></td>
            <td></td>
            <Event event='Explore' location='Balboa Island' color='blue'/>
            <Event event='Dessert' location='Ghirardelli Soda Fountain & Chocolate Shop' color='pink'/>
          </tr>

          <tr>
            <td className="time">3 pm</td>
            <td></td>
            <Event event='Visit' location='Natural History Museum of Los Angeles County' color='blue'/>
            <Event event='Explore' location='Griffith Observatory' color='blue'/>
            <Event event='Shopping' location='South Coast Plaza' color='pink'/>
            <td></td>
            <Event event='Boat Tour' location='Newport Beach' color='blue'/>
            <td></td>
          </tr>

          <tr>
            <td className="time">4 pm</td>
            <td></td>
            <Event event='Explore' location='Venice Canals' color='blue'/>
            <Event event='Shopping' location='The Grove' color='pink'/>
            <Event event='Happy Hour' location='Perch LA' color='purple'/>
            <Event event='Dinner' location='The Lobster' color='pink'/>
            <Event event='Explore' location='Old Town San Diego' color='blue'/>
            <td></td>
          </tr>

          <tr>
            <td className="time">5 pm</td>
            <Event event='Sunset Cruise' location='Santa Monica' color='blue'/>
            <Event event='Explore' location='Rodeo Drive' color='blue'/>
            <Event event='Dinner' location='Musso & Frank Grill' color='pink'/>
            <Event event='Explore' location='Hollywood Boulevard' color='blue'/>
            <td></td>
            <Event event='Dinner' location='George’s at the Cove' color='pink'/>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Calendar;
