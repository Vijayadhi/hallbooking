# Hall Booking API

The **Hall Booking API** is a RESTful service designed to facilitate seamless booking and management of halls for events, meetings, and conferences. It allows users to check availability, create bookings, update reservations, and cancel bookings efficiently.

## Features
- **Book Halls**: Users can book available halls based on date and time.
- **Manage Bookings**: Update, reschedule, or cancel existing bookings.
- **Availability Check**: Verify the availability of halls before booking.
- **Admin Controls**: Admins can manage halls, approve/reject bookings, and view reports.

## Tech Stack
- **Backend**: Django (Django REST Framework)
- **Database**: SQLite / PostgreSQL / MySQL (configurable)
- **API Documentation**: Swagger / Postman

## Installation & Setup
### Prerequisites:
- Python 3.x installed
- Virtual environment setup

### Steps:
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/hall-booking-api.git
   cd hall-booking-api
   ```
2. Create and activate a virtual environment:
   ```sh
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```
3. Install dependencies:
   ```sh
   pip install -r requirements.txt
   ```
4. Run migrations:
   ```sh
   python manage.py migrate
   ```
5. Start the server:
   ```sh
   python manage.py runserver
   ```

## API Endpoints
| Method | Endpoint | Description |
|--------|---------|-------------|
| POST   | /api/register/ | Register a new user |
| POST   | /api/login/ | User login |
| GET    | /api/halls/ | List available halls |
| POST   | /api/bookings/ | Create a new booking |
| GET    | /api/bookings/{id}/ | Retrieve booking details |
| PUT    | /api/bookings/{id}/ | Update booking details |
| DELETE | /api/bookings/{id}/ | Cancel a booking |

## Usage
1. **Check Availability**: Use the `/api/halls/` endpoint to view available halls.
2. **Make a Booking**: Submit booking details via the `/api/bookings/` endpoint.
3. **Manage Bookings**: Modify or cancel bookings as needed.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact
For queries or collaborations, feel free to reach out:
📧 venerablevignesh@gmail.com

