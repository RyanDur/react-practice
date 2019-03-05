import * as React from 'react';
import {Emoji} from '../../Emoji';

export const cats = [
  <Emoji key={'😾'} label={'pouting cat'} symbol={'😾'}/>,
  <Emoji key={'🙀'} label={'weary cat'} symbol={'🙀'}/>,
  <Emoji key={'😿'} label={'crying cat'} symbol={'😿'}/>,
  <Emoji key={'😽'} label={'kissing cat'} symbol={'😽'}/>,
  <Emoji key={'😼'} label={'cat with wry smile'} symbol={'😼'}/>,
  <Emoji key={'😺'} label={'grinning cat'} symbol={'😺'}/>,
  <Emoji key={'😸'} label={'grinning cat with smiling eyes'} symbol={'😸'}/>,
  <Emoji key={'😹'} label={'cat with tears of joy'} symbol={'😹'}/>,
  <Emoji key={'😻'} label={'smiling cat with heart-eyes'} symbol={'😻'}/>
];

export const catFormatter = (cat: number) => cats[+`${cat}`[0]] || '—';
