import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupsPage from "./pages/NewMeetup";
import FavouritesPage from "./pages/Favourites";
import Layout from "./components/layouts/Layout";

function App() {
  return (

    <Layout>
       <Routes>
         <Route exact={true} path="/" element={<AllMeetupsPage />} />
        <Route path="/new-meetups" element={<NewMeetupsPage />} />
         <Route path="/favs" element={<FavouritesPage />} />
       </Routes>

    </Layout>
    // <main>
    //   {/* <h1>Suraj's first react website !</h1> */}
     
    //   <Routes>
    //     <Route exact={true} path="/" element={<AllMeetupsPage />} />
    //     <Route path="/new-meetups" element={<NewMeetupsPage />} />
    //     <Route path="/favs" element={<FavouritesPage />} />
    //   </Routes>
    // </main>
  );
}

export default App;
