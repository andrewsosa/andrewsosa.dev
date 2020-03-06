---
path: "/projects/dockron"
date: "2019-09-07"
title: "Dockron: Run cron jobs in Docker containers"
image: ./docker.png
---

# Dockron
Simple task scheduling for Docker jobs
* __Github__: https://github.com/andrewsosa/dockron
* __npm__: https://www.npmjs.com/package/dockron

### Why?

Dockron was a way to keep the job scheduling as part of the rest of the Docker Compose stack. Instead of relying on an external crontab daemon, we could put it right in the middle of our other running containers.


Configuration is straight forward, you just need to include:

* A string name
* A cron schedule
* A docker image
* A shell command
* An optional docker network name to join.

```toml
["Sample Task Name"]
schedule = "* * * * *"
image = "alpine"
command = "sleep 10"

["Hourly Task"]
schedule = "0 * * * *"
image = "ubuntu"
command = "echo 'Hello, world\!'"
network = "my_network"
```
