# Movies Technical Assignment

This Angular project allows users to explore a collection of movies, view details, and manage a wishlist.

## Getting Started

### Prerequisites
- <img src="https://img.shields.io/badge/Node.js-Required-brightgreen" alt="Node.js Required"/>
- <img src="https://img.shields.io/badge/Angular%20CLI-16.2.2-blue" alt="Angular CLI 16.2.2"/>

### Installation
1. Clone the repository.
2. Run `npm install` to install dependencies.

### Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Features

### Movie Cards in Home Component
- The home component displays movie cards with relevant information.
- Each card has an "Add to Wishlist" button for users to add movies to their wishlist.

### Sorting Options
- Sort movies alphabetically from A to Z.
- Sort movies alphabetically from Z to A.
- Sort movies by release date in ascending order.
- Sort movies by release date in descending order.

### Wishlist
- Users can view and manage their wishlist.
- The wishlist shows movies sorted by user preference.

### Toggle Sorts Container
- Users can toggle the sorting options container from the left side towards the top for a more convenient view.

### Search Bar
- A search bar allows users to filter movies by name.

### Movie Details Section
- Clicking on a movie card navigates the user to a detailed view.
- The detailed view includes a description and an embedded YouTube video trailer.

## Commands

### Generate Component
Run `ng generate component component-name` to generate a new component.

### Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Running Tests
- Unit tests: Run `ng test` via Karma.
- End-to-end tests: Run `ng e2e`.

### Further Help
For more help on the Angular CLI, use <img src="https://img.shields.io/badge/Angular%20CLI-Help-red" alt="Angular CLI Help"/> or check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Contributing
Feel free to contribute to the project. Please follow the [contribution guidelines](CONTRIBUTING.md).

## License
This project is licensed under the [MIT License](LICENSE).
