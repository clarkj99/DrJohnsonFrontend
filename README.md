# DrJohnson React

DrJohnson is an Electronic Medical Records application (scaled down). It was written to showcase technologies learned from my Flatiron school coding bootcamp experience, using Ruby on Rails api for model and controller, and React for the views.

## Configuration

- React Version 16.12.0

## React Project Creation

```bash
yarn create react-app frontend
```

## Wireframe

- Marvelapp.com

## Tasks

- [x] Scaffold Rails and React
- [ ] Models and Controllers
- [ ] Authentication and Roles
- [ ] Seed data
- [ ]
- [ ] Search bar
- [ ] Admin Page to add new providers
- [ ] ICD-10 Lookup/Download
- [ ] Photo for Profile
- [ ] Alexa Skill (?)

## Notes

2020-01-08

- Create custom Bulma theme using Sass

2020-01-09

```
yarn add bulma
yarn add node-sass
```

2020-01-10

- fun fact: if you make the prop name the same as your action name, then you can just do this

```
const mapDispatchToProps = {
  login
};
```

- I can store objects in local storage using JSON.stringify and JSON.parse

- redux and jwt: https://levelup.gitconnected.com/using-jwt-in-your-react-redux-app-for-authorization-d31be51a50d2

2020-01-14

- Implemented forms by creating rails models for each form view.
- Added steps navigation for encounter using bulma-steps. I had to create my own implementation in Rails, without the included javascript. Manage classes is-active, is-complete, is-success

2020-01-15

- Remember to create child models with user and encounter
- Added search bar. Loaded user in state, then searched first name and last name using Array.includes().

2020-01-16

- process for creating a new encounters form:

  - create new JSX component for the form (Intake.jsx)
  - add component to `EncounterEdit.jsx`
  - use updateEncounterChild action for updates
  - add fields to component

- using `<input type="datetime-local" />` presented a challenge. Fortunately my coach suggested using `moment.js`
