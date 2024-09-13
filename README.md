# Langara Computer Science Club Website Setup Guide

## Prerequisites

- **Docker:** Version 20.10.17 or higher
- **Docker Compose:** Version 2.5.0 or higher

Verify your Docker and Docker Compose versions by running:

```bash
docker --version
docker-compose --version
```

## Table of Contents

1. [Cloning the Repository](#cloning-the-repository)
2. [Configuration](#configuration)
3. [Building the Docker Image](#building-the-docker-image)
4. [Running the Container](#running-the-container)
5. [Troubleshooting](#troubleshooting)

## Cloning the Repository

Clone the repository to your local machine:


## Building the Docker Image

Build the Docker image:

```bash
docker build -t langaracpscnext:latest .
```

## Running the Container

Start the container:

```bash
docker run -p 3000:3000 langaracpscnext:latest
```

Access the Langara Computer Science Club site at [http://localhost:3000](http://localhost:3000).

## Troubleshooting

Here are some common issues and their solutions:

1. **Error: OCI runtime create failed**
   - Ensure Docker is properly installed and running.
   - Try restarting the Docker service or your computer.

2. **Error: Failed to load resource: net::ERR_CONNECTION_REFUSED**
   - Check if the container is running: `docker ps`
   - Inspect container logs: `docker logs <container_id>`


For additional support, please open an issue on the GitHub repository or contact the Langara CPSC Club administrators.