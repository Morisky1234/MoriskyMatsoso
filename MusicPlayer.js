import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MusicPlayer= () => {
   const [tracks, setTracks] = useState([]);
   const [currentTrack, setCurrentTrack] = useState(null);

   useEffect(() => {
   	 axios.get('http://localhost:3001/api/tracks')
   	   .then(response => {
   	   	 setTracks(response.data);
   	   	 setCurrentTrack(response.data[0]);s2
   	   }
   }