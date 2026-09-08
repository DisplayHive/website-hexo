---
title: The Road to 1.0
date: 2026-09-09 10:00:00
author: justelex
img: /images/dummy.png
top: false
hide: false
cover: true
coverImg: /images/dummy.png
toc: false
mathjax: false
summary: DisplayHive 1.0 is on the horizon — a new branch model, stable releases, a live preview, and public Docker images.
categories: Update
tags:
  - Update
  - Announcement
  - Infrastructure
  - Docker

---
# The Road to 1.0

DisplayHive 1.0 is on the horizon. Most areas of the project have reached beta stage, and the pieces that were still moving around a lot have settled down. This post is a quick overview of where things stand and what changed recently.

If you run into anything odd along the way, please file a bug report. Feedback from real setups is what gets us to a solid 1.0.

## A New Development Model

Development is now split into a `main` and a `development` branch. Work happens on `development`. Every so often, after some additional testing, those changes land on `main` and get tagged for release.

We hope this change results in:

- More stability in releases and installations.
- Better testing before anything reaches users.
- Basic features that are now production ready, so you can expect far fewer breaking changes.

## Deployment and Build Systems Are the Current Focus

Work on the deployment and build systems is the main focus at the moment. Right now the focus is on how the application is delivered as NixOS and Docker containers. There will be a separate blog post about those changes once they are done. This is the last major show-stopper on the way to a stable 1.0 release.

## Public Docker Images on ghcr.io

DisplayHive Docker images are now publicly available on the GitHub Container Registry at `ghcr.io`. No build step required — pull the image and run it.

## New Live Preview

There is a new live preview in the content editor, making it easier to see what your content looks like before it goes out to the displays. This is a complex new feature, and we would love to hear about your experience with it. Get in touch!

## Ideas for 1.x and 2.x

Even though we have a picture of where DisplayHive is heading after 1.0, the roadmap is far from fixed. If you have ideas for the 1.x or 2.x line, the issue tracker is the place to share them. If you need a feature and it fits the vision, it may appear faster than you think.

## A Few Personal Words

I am really grateful that there are early adopters, first committers, and many people keeping an eye on the project. Thank you for keeping my motivation up through your interaction. It's really nice to build something that is of interest to others.

A special thanks and shout-out goes to the people of my local hackerspace [Westwoodlabs](https://westwoodlabs.de). Thanks for being so patient, even though I bother you with DisplayHive topics nearly every evening I am there.
