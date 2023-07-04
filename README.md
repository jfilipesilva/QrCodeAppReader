# QR Code Reader App

This project is a QR Code Reader mobile application built with React Native, TypeScript, and Redux Saga.

## Table of Contents

- [About](#about)
- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Unit Test](#unit-test)
- [Usage](#usage)

## About

QR Code Reader App is a mobile application that is designed to read QR codes quickly and accurately. The application is built with React Native and TypeScript, utilizing Redux Saga for state management.

This application can be used to scan any QR code, providing a convenient way to access information embedded within QR codes.

## Getting Started

To get a local copy up and running, follow these steps:

### Prerequisites

- Follow the steps in [React Native CLI](https://reactnative.dev/docs/environment-setup)

### Installation

1. Clone the repo

```sh
git clone https://github.com/jfilipesilva/QrCodeAppReader.git
```

2. Install dependencies

```sh
yarn install
```

3. Start metro

```sh
yarn start
```

4. Run the application in development mode

- For iOS

```sh
yarn ios
```

- For Android

```sh
yarn android
```

## Unit Test

```sh
yarn test
```

## Usage

After successfully running the application, allow the necessary permissions for the app to access your device's camera. Then, point your camera at a QR code to scan it.
