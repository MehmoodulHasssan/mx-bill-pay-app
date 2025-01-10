# MX Bill Pay

**MX Bill Pay** is a React Native Android app designed to serve as a digital wallet. It integrates with the dedicated APIs provided by **VFD Microfinance Bank of Nigeria** to enable users to create virtual accounts based on their BVN (Bank Verification Number) and perform seamless bill payments for various Nigerian service providers affiliated with VFD Microfinance Bank.

---

## Features

### **User Authentication**
- Secure JWT-based authentication.
- Authentication state managed using **Redux Toolkit**.

### **Virtual Account Creation**
- Create virtual accounts linked to a customer's BVN.
- Easy account setup and management.

### **Bill Payments**
- Pay bills for Nigerian service providers seamlessly.
- Integration with VFD Microfinance Bank's APIs for reliability.

### **Global State Management**
- Centralized state management using **Redux Toolkit**.
- Smooth handling of authentication and other global states.

### **Data Fetching**
- Efficient API integration with **TanStack Queries** for data fetching and caching.

### **Cross-Platform Support**
- Built using **Expo**, ensuring smooth cross-platform compatibility and faster development cycles.

---

## Tech Stack

### **Core Technologies**
- **React Native**: For building the mobile application.
- **Expo**: Framework for easier development and deployment.

### **State Management**
- **Redux Toolkit**: For managing the global application state.
- **TanStack Queries**: For querying and caching API data.

### **Backend Integration**
- **LARAVEL**: For communicating between client and vfd wallet Apis.
- APIs provided by **VFD Microfinance Bank of Nigeria**.

### **Authentication**
- JWT for secure user authentication.

---

## Installation

### Prerequisites

Ensure the following are installed:
- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/mx-bill-pay.git
   cd mx-bill-pay
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run start
   ```

5. Run the app:
   - Scan the QR code with the Expo Go app (Android).
   - Use an Android emulator to view the app.


