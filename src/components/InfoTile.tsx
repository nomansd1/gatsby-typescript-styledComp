import React from 'react'
import { Tile, Info, TileImage } from './styles';

function InfoTile(props) {
  return (
      <Tile>
          <TileImage src={props.tileImage} alt="" />
          <Info> {props.info} </Info>
      </Tile>
  )
}

export default InfoTile