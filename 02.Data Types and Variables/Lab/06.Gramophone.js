function gramophone(band , album , song)
{         
      let res = (album.length * band.length) * song.length / 2

      let rotation = res / 2.5

      console.log(`The plate was rotated ${Math.ceil(rotation)} times.`)

}
