<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.1/css/materialize.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/8.9.1/styles/tomorrow.min.css">
  <style>
  .container ul li {
      list-style-type: circle;
      padding-left: 10px;
      margin-left: 30px;
  }
  h2 {
    border-bottom: solid #ccc 1px;
  }
  h3 {
    font-style: italic;
  }
  code {
    border: 1px #ddd solid;
  }
  </style>
</head>
<body>
  <nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo right">UCCD II - 2016</a>
      <ul id="nav-mobile" class="left hide-on-med-and-down">
        <li><a href="/">Home</a></li>
      </ul>
    </div>
  </nav>

  <div class="container flow-text">
  <h1 id="data-models">Data Models</h1>
<p>This project has the following essential elements:</p>
<ul>
  <li>Users</li>
  <li>Song Queue</li>
  <li>Currently Playing</li>
</ul>
<p>Further breaking down each component: </p>
<ul>
  <li><p>1. Users</p>
  <ul>
    <li>id</li>
    <li>username</li>
    <li>songs</li>
    <li>votes</li>
    <li>score</li>
  </ul>
  </li>
  <li><p>2. Song Queue</p>
  <ul>
    <li>song</li>
    <li>artist</li>
    <li>album</li>
    <li>votes</li>
    <li>numberInQueue</li>
    <li>submitter</li>
  </ul>
  </li>
  <li><p>3. Currently Playing</p>
  <ul>
    <li>song</li>
    <li>artist</li>
    <li>album</li>
    <li>votes</li>
    <li>submitter</li>
  </ul>
  </li>
</ul>
<h1 id="revision">Revision</h1>
<p>In order to accomplish this redesign, active users will appear materialize card-reveal. The song queue and current song playing will display on the main page, and the queue will be within a similar div. </p>

  </div>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/8.9.1/highlight.min.js"></script>
  <script>hljs.initHighlightingOnLoad();</script>
</body>
</html>
