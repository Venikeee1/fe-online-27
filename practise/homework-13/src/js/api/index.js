class ApartmentsService {
  async getApartments() {
    const response = await fetch(
      'https://apt-booking-api.herokuapp.com/apartments',
    );

    if (!response.ok) {
      throw response;
    }

    return response.json();
  }
}

export default ApartmentsService;

// const apartmentService = new ApartmentsService();
// apartmentService.getApartments().then();

// const apartmentApi = {
//   getApartments() {
//     return fetch(
//       'https://apt-booking-api.herokuapp.com/apartments',
//     ).then(result => result.json());
//   },
// };
