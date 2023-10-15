import React , { useState }from 'react';
import * as BiIcons from 'react-icons/bi';
import * as GiIcons from 'react-icons/gi';

export const navbarData = [
    {
        name: 'Home',
        path: '/',
        icon: <BiIcons.BiHomeAlt2/>,
        cName: 'nav-text'
    },
    {
        name: 'Playlist_1',
        path: '/playlist1',
        icon: <BiIcons.BiSolidPlaylist/>,
        cName: 'nav-text'
    },
    {
        name: 'Playlist_2',
        path: '/playlist2',
        icon: <GiIcons.GiLoveSong/>,
        cName: 'nav-text'
    },
    {
        name: 'Playlist_3',
        path: '/playlist3',
        icon: <BiIcons.BiAlbum/>,
        cName: 'nav-text'
    },
    {
        name: 'Playlist_4',
        path: '/playlist4',
        icon: <BiIcons.BiAlbum/>,
        cName: 'nav-text'
    }
]