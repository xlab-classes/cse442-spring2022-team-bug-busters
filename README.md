<div id="top"></div>
<!--
*** TEMPLATE SOURCE - https://github.com/othneildrew/Best-README-Template
*** ALL CREDIT GOES TO - https://github.com/othneildrew
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

[//]: # ([![LinkedIn][linkedin-shield]][linkedin-url])



<!-- PROJECT LOGO -->
<br />
<div align="center">
<h3 align="center">Bug Busters</h3>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project
Our goal is to create a game hub in which everyone and anyone can come together and socialize with games. We look to add more games in the future where we can incorporate games that require to be there physically but bring them to life virtually through the browser!
<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [React.js](https://reactjs.org/)
* [Create-React-App](https://create-react-app.dev/docs/getting-started/)
* [PHP](https://www.php.net/manual/en/getting-started.php)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

The program needs node packages as its library. 

### Prerequisites

You need to install npm on your system.

Node Package Manager: [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm/)
  
* [brew npm package](https://formulae.brew.sh/formula/node/)
  ```sh
  brew install node
  ```

### Installation

1. Clone the repo
   ```sh
   git clone (https://github.com/xlab-classes/cse442-spring2022-team-bug-busters)
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
# To Run Locally
### Frontend

* Start the frontend app

1. To install app dependenices
   ```sh
   npm install
   ```
2. To start application
   ```sh
   npm start
   ```
### Backend

* Since the backend is already deployed for you we do not need to worry about it.
   
# To Deploy onto Apache Servers

1. To install app dependenices
   ```sh
   npm install
   ```
2. To create a production build
   ```sh
   npm run build
   ```
3. Copy the backend folder into the build folder
4. Then use 
   ```sh
   scp -r [path/to/source/file] [username@targetHost:target/path]
   ```
   to secure copy onto the existing Apache server under University at Buffalo. Once this is done the Apache server automatically deploys onto the website [Bug Busters](https://www-student.cse.buffalo.edu/CSE442-542/2022-Spring/cse-442h/) 
   
<p align="right">(<a href="#top">back to top</a>)</p>


<!-- USAGE EXAMPLES -->
## Usage

Placeholder.

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

### Frontend

- [x] Login Page
- [x] Register Page
- [ ] Dashboard
  - [x] Leaderboard
  - [ ] List of games
- [x] Settings Page
  - [x] Account Settings
  - [x] UI Settings

### Backend

- [x] RESTful API

### Database

- [x] MySQL Database 
  - [x] User Account
  - [x] Scores

See the [open issues]((https://github.com/xlab-classes/cse442-spring2022-team-bug-busters/issues)) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the APACHE License, version 2.0. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Project Link: [https://github.com/xlab-classes/cse442-spring2022-team-bug-busters](https://github.com/xlab-classes/cse442-spring2022-team-bug-busters)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
<!-- ## Acknowledgments

* []()
* []()
* []()

<p align="right">(<a href="#top">back to top</a>)</p> -->



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
<!-- Shield will be updated once the repo changed to public -->
[contributors-shield]: https://img.shields.io/github/contributors/xlab-classes/cse442-spring2022-team-bug-busters.svg?style=for-the-badge
[contributors-url]: https://github.com/xlab-classes/cse442-spring2022-team-bug-busters/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/xlab-classes/cse442-spring2022-team-bug-busters.svg?style=for-the-badge
[forks-url]: https://github.com/xlab-classes/cse442-spring2022-team-bug-busters/network/membersls


[stars-shield]: https://img.shields.io/github/stars/xlab-classes/cse442-spring2022-team-bug-busters.svg?style=for-the-badge
[stars-url]: https://github.com/xlab-classes/cse442-spring2022-team-bug-busters/stargazers
[issues-shield]: https://img.shields.io/github/issues/xlab-classes/cse442-spring2022-team-bug-busters.svg?style=for-the-badge
[issues-url]: https://github.com/xlab-classes/cse442-spring2022-team-bug-busters/issues
[license-shield]: https://img.shields.io/github/license/xlab-classes/cse442-spring2022-team-bug-busters.svg?style=for-the-badge
[license-url]: https://github.com/xlab-classes/cse442-spring2022-team-bug-busters/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/logo.png
