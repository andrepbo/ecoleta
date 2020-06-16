![git-capa](https://user-images.githubusercontent.com/8798970/84420700-cdb65200-abf0-11ea-9689-18e6829c3bdb.png)

<h4 align="center"> 
	NextLevelWeek 1.0 completed!
</h4>
<p align="center">
  <a href="https://www.linkedin.com/in/andrephillipe/">
    <img alt="Made by Andre Oliveira" src="https://img.shields.io/badge/made%20by-Andre%20Oliveira-brightgreen">
  </a>
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/andrepbo/rocketseat-ecoleta">
  <a href="https://github.com/andrepbo/rocketseat-ecoleta/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/andrepbo/rocketseat-ecoleta">
  </a>
  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">
</p>
<p align="center">
  <a href="#what-is-next-level-week">Next Level Week</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#project">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#technologies-used-in-this-project">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#how-to-use">How to use</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#license">License</a>
</p>
<br />

## What is Next Level Week?

NLW is a completely online, week-long event. 
During this period, participants are guided by the competent Rockeseat team through a teaching method geared to practice, 
where it is possible to learn new tools, technologies and discover hacks.

### Event duration
- [x] Day 1 (01/06): Accelerating your evolution
- [x] Day 2 (02/06): Looking for opportunities
- [x] Day 3 (03/06): Stack's choice
- [x] Day 4 (04/06): Up to 2 years in 2 months
- [x] Day 5 (05/06): Extra mile

## Project
Ecoleta is a project developed based on the International Environment Week. 
The objective is to create an ecosystem where people connect with companies that collect specific waste, 
to carry out the conscious disposal of products such as lamps, batteries, cooking oil, etc.

### Technologies used in this project:
- [Node.js](https://nodejs.org/en/)
- [React](https://reactjs.org)
- [React Native](https://facebook.github.io/react-native/)
- [Expo](https://expo.io/)

## How to use
Clone and run the application from the command line. You'll need [Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) + [Yarn](https://yarnpkg.com/) installed on your computer.

From the command line:

### Install API 

```bash
# Clone the repository
$ git clone https://github.com/andrepbo/nlw-ecoleta

# Go into the repository
$ cd nlw-ecoleta/server

# Install dependencies
$ yarn install

# Run Migrates
$ yarn knex:migrate

# Run Seeds
$ yarn knex:seed

# Start server
$ yarn dev

# running on port 3333
```

### Install Web

```bash
# Clone this repository
$ git clone https://github.com/andrepbo/nlw-ecoleta

# Go into the repository
$ cd nlw-ecoleta/web

# Install dependencies
$ yarn install

# Run
$ yarn start

# running on port 3000
```

### Install Mobile

```bash
# Clone this repository
$ git clone https://github.com/andrepbo/nlw-ecoleta

# Go into the repository
$ cd nlw-ecoleta/mobile

# Install dependencies
$ yarn install

# Run
$ yarn start

# Expo will open, just scan the qrcode on terminal or expo page

# If some problem with fonts, execute:
$ expo install expo-font @expo-google-fonts/ubuntu @expo-google-fonts/roboto

```

## License

This project is under the MIT license. See the [license](https://github.com/andrepbo/rocketseat-ecoleta/blob/master/LICENSE) file for details.

