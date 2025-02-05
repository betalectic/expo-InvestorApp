# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get Started

### 1. Install Dependencies

Run the following command to install the necessary dependencies:

```bash
npm install
```

### 2. Start the App

To start the app, run:

```bash
npx expo start
```

### 3. Install EAS CLI

EAS CLI is the command-line tool for interacting with EAS services. To install it, run:

```bash
npm install -g eas-cli
```

### 4. Login to Your Expo Account

To log in to your Expo account, run:

```bash
eas login
```

### 5. Configure the App

Configure your app by running:

```bash
eas build:configure
```

### 6. Build for iOS

To build the app for iOS, run:

```bash
eas build --profile production --platform ios
```

### 7. Submit the App

After the build is successful, make sure to update the API key in `eas.json` and then submit the app:

```bash
eas submit --platform ios
```

## Additional Steps

### Copy .env.example to .env

Make sure to copy the .env.example file to .env to set up your environment variables:

```bash
cp .env.example .env
```
