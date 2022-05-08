#!/usr/bin/env bash

# This setup script installs mongo, starts it, and ensures mongo runs on system startup.
# Assumes Ubuntu environment.

sudo apt update
sudo apt install mongodb
sudo service mongodb start
systemctl enable mongodb.service