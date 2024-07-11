# MealMaster

- An application that aims to make choosing meals and managing ingredients effortless.
- This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.11 and later migrated to version 18

## Roles

### Guest

- **Access**: Only the Recipes page.
- **Functionality**: View recipes but cannot access other features.

### User/Subscribed User

- **Login/Signup**:
  - **Validation**: Email must follow the specified format; Password must be at least 8 characters long, contain 1 special character, and 4 numbers.
  - **Password Generation**: Option to generate a password using a slider.
  - **Session**: 20-minute session created using JWT token, with bcrypt used for password encryption.
- **Functionality**:
  - **Meals Page**:
    - Select up to 3 recipes for breakfast, lunch, and dinner.
    - Navigate to the Recipes page and apply filters.
  - **Recipes Page**:
    - Add recipes to meals, filter, and search for recipes.
    - View ingredients as present or missing.
    - Add recipes to meals and view missing ingredients.
  - **Products Page**:
    - Keep track of products with AddProductForm validation.
    - View products in table and card form, search, delete, and edit them.
  - **User Page**:
    - View user info such as username, subscription plan, and calorie goal.
    - Set a calorie goal and view a chart showing meal calorie content versus the goal.
  - **Subscription**:
    - Some recipes are locked behind a subscription.
    - Choose from 3 subscription plans to unlock special recipes.

## External Libraries

- **bcrypt**: Used for password hashing.
- **json-web-token**: Used for JWT authentication.
- **echarts**: Used for displaying charts.
- **moment**: Used for handling JWT expiration.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
