 npm public registry -> '@bheshraj-ticketing/common';
 npm i @bheshraj-ticketing/common <br>
**Common module**
https://github.com/BheshRajNeupane/common-module-of-ticketing-app
The common module contains shared logic, error handling, middleware, and event handling used across all services. This module ensures services are developed with consistent logic, error handling, and event structure, making the application more maintainable and scalable.


# Ticketing Microservices Application

This project is a **ticketing application** where users can buy and sell tickets. It follows an **event-driven microservice architecture** using technologies like **TypeScript**, **MongoDB**, **NATS Streaming** (for pub/sub communication between services), **REST API**, **Docker**, **Ingress**, **NGINX**, **Kubernetes**, and **Skaffold**. The application is designed to be **scalable**, **concurrent**, and **production-ready**, featuring various microservices for **orders**, **tickets**, **payments**, and **auth** (authentication & authorization using JWT). Testing is done using **Jest**.

---

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Microservices](#microservices)
- [Architecture](#architecture)
- [File Structure](#file-structure)
- [Installation and Setup](#installation-and-setup)
- [Running the Application](#running-the-application)
- [Event-Driven Communication (NATS)](#event-driven-communication-nats)
- [Common Module](**Common module**)
- [API Documentation](#api-documentation)
- [Authentication and Authorization](#authentication-and-authorization)
- [Concurrency and Scalability](#concurrency-and-scalability)
- [Testing](#testing)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- **Microservice Architecture**: Decomposed into services for handling tickets, orders, payments, and user authentication.
- **Event-Driven Communication**: Uses **NATS Streaming** for pub/sub communication between services.
- **Authentication & Authorization**: Implemented using **JWT**.
- **Concurrency Handling**: Implements strategies for handling concurrency at scale.
- **Testing**: Each service is tested using **Jest**.
- **Docker & Kubernetes**: Containerized services orchestrated using Kubernetes, with Skaffold for development.
- **Ingress & NGINX**: Routing traffic using NGINX and Kubernetes Ingress.
- **Scalable Design**: Built for scaling horizontally across different services.
- **Production Ready**: Built with clean, scalable code and production-level standards.

---

## Technologies Used

- **TypeScript**: Strongly typed language for writing the entire codebase.
- **MongoDB**: NoSQL database for storing ticket and order information.
- **NATS Streaming**: Event bus for microservice communication (Pub/Sub).
- **REST API**: HTTP API for all service interactions.
- **Docker**: Containerization of all services, with a Dockerfile for each service.
- **Kubernetes**: Orchestration tool for managing containerized services.
- **Skaffold**: Tool for local Kubernetes development and continuous delivery.
- **Ingress & NGINX**: For load balancing and routing.
- **Jest**: Testing framework for unit and integration tests.
- **GitHub Actions**: Continuous deployment.

---

## Microservices

1. **Auth Service**: 
   - Handles user registration, login, JWT-based authentication, and role-based authorization.
2. **Ticket Service**:
   - Manages ticket creation, updates, and listing for selling.
3. **Order Service**:
   - Handles the creation and management of orders for tickets.
4. **Payment Service**:
   - Manages payments and integrates with external payment gateways like **Stripe**.

Each service is deployed as a separate microservice in the Kubernetes cluster and communicates via **NATS** for pub/sub events. Each service also has its own **Dockerfile**.

---

## Architecture

This application uses **event-driven microservices** with **NATS Streaming** for communication. Each service is designed to be independent and stateless, leveraging MongoDB for persistence and using **event publishers and listeners** to maintain data consistency across services.

---

## File Structure

```plaintext
├── auth
│   ├── src
│   │   ├── controllers      # Auth-related controllers
│   │   ├── models           # MongoDB models for user schema
│   │   ├── routes           # Auth routes
│   │   ├── events           # Event publishers and listeners
│   │   ├── middlewares      # Authentication and validation middlewares
│   │   ├── tests            # Jest tests for auth service
│   │   └── app.ts           # Entry point for the auth service
│   └── Dockerfile           # Dockerfile for the auth service
├── tickets
│   ├── src
│   │   ├── controllers      # Ticket-related controllers
│   │   ├── models           # MongoDB models for tickets
│   │   ├── routes           # Ticket routes
│   │   ├── events           # Event publishers and listeners
│   │   ├── tests            # Jest tests for ticket service
│   │   └── app.ts           # Entry point for the ticket service
│   └── Dockerfile           # Dockerfile for the ticket service
├── orders
│   ├── src
│   │   ├── controllers      # Order-related controllers
│   │   ├── models           # MongoDB models for orders
│   │   ├── routes           # Order routes
│   │   ├── events           # Event publishers and listeners
│   │   ├── tests            # Jest tests for order service
│   │   └── app.ts           # Entry point for the order service
│   └── Dockerfile           # Dockerfile for the order service
├── payments
│   ├── src
│   │   ├── controllers      # Payment-related controllers
│   │   ├── models           # MongoDB models for payments
│   │   ├── routes           # Payment routes
│   │   ├── events           # Event publishers and listeners
│   │   ├── tests            # Jest tests for payment service
│   │   └── app.ts           # Entry point for the payment service
│   └── Dockerfile           # Dockerfile for the payment service
├── infra                    # Infrastructure files (Docker, K8s manifests, Ingress)
│   ├── k8s                  # Kubernetes YAML files for each service
├── common                   # Shared logic, error handling, middleware, events
│   ├── errors               # Custom error handling classes
│   ├── middleware           # Common middleware (auth, validation, error handling)
│   ├── events               # Base classes for publishers and listeners
│   └── index.ts             # Export common modules for reuse across services
└── README.md                # Project documentation

```

**Documentation is updating soon..!!**
