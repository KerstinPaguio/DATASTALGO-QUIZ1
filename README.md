CBK Full-Stack: Closet by KayKay E-Commerce
This repository contains the complete codebase for the Closet by KayKay (CBK) e-commerce platform. It integrates a Django REST API backend with a React frontend to provide a professional, data-driven shopping experience.

🛍️ Project Overview
Closet by KayKay (CBK) is a fashion brand dedicated to curated, stylish, and affordable fashion. This application serves as the brand's official online presence, moving beyond social media to a dedicated, scalable platform for personalized styling.

💻 Technologies Used
Backend (Django)
Python 3.12: Primary programming language.

Django 5.2.5: Core web framework.

Django REST Framework (DRF): For building API endpoints and handling requests.

JsonResponse: For delivering structured product data in JSON format.

Frontend (React)
React: For building dynamic and reusable user interfaces.

React Bootstrap: For responsive layouts and UI components (Navbars, Cards).

React Router DOM: For client-side routing and seamless page transitions.

JavaScript (ES6+): For frontend logic and data handling.

Custom CSS: For unique brand styling, hover effects, and responsive adjustments.

📂 Project Structure
Backend Directory
backend/settings.py: Main configuration including installed apps and middleware.

base/views.py: API views that handle logic for product retrieval.

base/products.py: Central data source for product objects (Dummy data).

base/urls.py: URL routing for the API endpoints.

Frontend Directory (src/)
components/: Reusable UI elements like Header.jsx, Footer.jsx, and Rating.jsx.

screens/: Main page views including HomeScreen.jsx and ProductDetailScreen.jsx.

App.js: The main hub for frontend routing logic.

products.js: Local data mapping for frontend rendering.

🛣️ API and Client Routes
Backend API Endpoints
GET / — Returns a list of all available API routes.

GET /products/ — Returns a full list of all CBK products.

GET /products/<pk>/ — Returns data for a single product using its unique ID (pk).

Frontend Page Routes
Route / (HomeScreen): The landing page featuring the brand narrative and shop links.

Route /clothes (ClothesScreen): The product listing page for all items.

Route /product/:id (ProductDetailScreen): Detailed view showing descriptions, price, and ratings.

✅ Key Features
Full-Stack Integration: A React frontend that consumes data dynamically from a Django REST API.

Responsive Design: Fully optimized for a seamless experience on both mobile and desktop.

Categorized Listings: Products are organized by type (Tops, Bottoms, Dresses) for easy navigation.

Interactive Feedback: Includes a functional rating system and hover effects on product cards.

Scalable Architecture: Uses dynamic routing (URL parameters) to handle an expanding inventory.

🚀 Installation and Local Setup
1. Clone the Project
Bash

git clone <repository-url>
cd <project-folder-name>
2. Setup the Backend
Bash

cd backend
pip install django djangorestframework django-cors-headers
python manage.py migrate
python manage.py runserver
3. Setup the Frontend
Bash

# Open a new terminal
cd frontend
npm install
npm start
Connect with the brand: Closet by KayKay Official Facebook
