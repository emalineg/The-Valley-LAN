import React from 'react'
import TeamCarousel from './TeamCarousel'

type Props = {}

export const FeaturedTeams = (props: Props) => {
  const teams = [
    {
      id: 1,
      image: 'https://fujifilm-x.com/wp-content/uploads/2021/01/gfx100s_sample_04_thum-1.jpg'
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1579353977828-2a4eab540b9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2FtcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
    },
    {
      id: 3,
      image: "https://live.staticflickr.com/65535/51111512793_de3a8f9f27_b.jpg"

    },
    {
      id: 4,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy6Anq1E4_wElNp8YHogGrjUOjcyGy3kizbA&usqp=CAU'
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1579353977828-2a4eab540b9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2FtcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
    },
    {
      id: 6,
      image: "https://live.staticflickr.com/65535/51111512793_de3a8f9f27_b.jpg"
    },
    {
      id: 7,
      image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYVFRgUEhUZGRgaGBgYGhgZGBgYGBkZGhgZGRgYGBgcIS4lHB4tHxgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHBISHDUhISExNDQ0NDQxNDE0MTQ1NDE0NDQ0NDQ0NDQ0NDE0NDQ0NDQ0NDQ0NDQ0NDQ0NDQxNDE0NP/AABEIAMIBAwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQIDBAUGBwj/xABDEAABAwIDBQUGAwUGBgMAAAABAAIRAyEEEjEFQVFhcSKBkaGxBhMywdHwFFKSB0JiguEVI3Oi0vFTcoOTs/IXMzT/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAQIDBAX/xAAnEQEBAAICAgICAQQDAAAAAAAAAQIRElEDITFBE2EyFIGRoQQicf/aAAwDAQACEQMRAD8A9WDU7Kn5UuVbYQwiFLlRlQQ5UZVNlSZUEWVJlU2VJlVEOVNLVPlRlQVyxNLFOWoLU2K5YmlisFqaWJsVixNLFZLE0sV2KxYmFisliYWJsVi1MLFZLE0sV2KxYmFisliYWK7RWLU0tVksTCxXYrFiaWqwWpham0Vy1IWqwWJhamxAWpC1TFqQtV2iAtTC1WC1NLU2IMqRS5UK7R3oalyqSEQvNt20jyoyqREJs0iyoyqVEJs0hyoyqaEQmzSDIgsU8JMqbTSuWJparBYkLFdmlctTC1WSxNLE2quWpparBYmlibFYsTSxWCxIWK7TSsWJhYrJYmFibRWLEwsVosTCxXa6VSxMLFaLEwsV2iqWJpYrRYmFiuzSsWJhYrJYmliu00rFqQtVgsWBt/2loYXsvl74nIyJHAvJs0efJS5SfLWOGWV1jNtUtTC1cC79or5MYdkbu24nvOW6i/8AkOr/AMCn+p6z+THt1/pfJ1/t6DlQuHb+0Nv72HM74fbu7KFeePbP9P5OnuqEIXJAhCEAhCEAhCEAhCEAhCECQkLU5CCMsTCxTIhNiuWJparJamFiu00rFqaWKwWJpYmzSsWJhYrRYmFiuzSsWJpYrJYmlibNKpYmFitFiYWJyTSsWJhYrRYmFicjTnParbAwtAvtndLaY/ij4o3ga+A3rxTGYlz3FzySSSSSZJJ3k8V1Ht9tf32JcAexTmm3+U9t3e63RoXGuO8rjllyr6vh8f48J3fdKXJMyamSst2ppQkhCK+tkKNlRrrtcD0IKkXZ8gIQhAIQhAIQhAIQhAIQhAIQhAIQhAIQhAhCaWp6RZoiLE0sU6aQptUBYmFisEJpanJdK5YmlisFqYWpyXirlqo7Wre7oVag1ZTe8dWsJHnC1C1c/wC3FTJgcQeLWt7nuaw+TlLl6awx3lJ+48AxlT90G9sx333eipPKkr3c53MquZWZH0PJld1ITZMN1D7zcnZiFrWnHnKna9Cia5Immudegio6bQIggtAJibH+oXaezXtoaTPd4nO9onK8CXjg0g6jWDPAdOKoOIyjcSfSQPUJc29ongOW4Afe5evLCV8yZPTW/tBw50p1OXwSR0zLZ2Z7R4euQGVAHGIa7suJO4bnHoSvGwxr5MQTqJBgjRwUoaQLOsbyY6T6W5LncL9NSx7uhea+z/tk+n2MRL2CBOtRs6XJ7Q63vroF19P2owjmhwrsg7jId+kifJc76+V020Lmdo+2NCnAZNQ2+CMoB/iOp5DvhWtl+02HxFqb4eJlj+y8Rrbf1EqWyTZqtxCrfjWfmCT8cz8wU/JF43paQqn49nEIOPZxCn5IcMultCpnaLPzBJ/aTPzBPyzqnGrqFS/Hs/MEv45vFZvlnVXhl0uIVP8AHN4pPxzeKl836Px5dLkolUvx7eKadoM4rN8t6X8eXS/KSVnnaLeITHbUYP3gs88r9L+OtIlNJWYdqs/MPNMdtdn5gnLLo4VpkppKynbXZ+byUbtrM4nyT/v03Mf21i5c1+0KmX7PrhtyAx/cyoxx8mlXHbXZxd5LzL9pXtm904bDvinAD3NPaeTMszA2aBEgamQbWVkyt1pfWNl6cDXLWw0669Ot1Vq1JsNFAAN2vokLOa7zGRq+bLPepqHthPAaVDCIV0kys+olhIo5PFCaPyXp22AxcwHG/wAPfxjipqLtxJEEze1vsrHw74MkiQ4HoJkwr2JrhpPM/fovXK8NXKWIh1zF73vl6+fcVMzH03OLZ4GYgHmP4tOqxMHneXO7uAEyAPEjwKbiWZXgHQ6iZAE7hw1KK6YwRlaebSBYcBGmqZkgknS56cvGfBYNHFPYYcZAOWDw+HNK0GYkO3ju9CVPS70uOqRJud3dfiomPdmD2Eh4IIIsQREGNOv2FC2oIDidI5zw8kxmKAc0xaLHcd8T3KcYnKu72R7RMewCuRTfoZsx3MO0aeRW0+o0DM5wA4kgBeYnFOuQfWFPgsS0GKxcWA5ezPZmYMcOQXPLxT6bmd+3du2xQBj3re6SPECFap12PEscHji0gjxmFh0tg03gPbOVwkdqQRxBbMqWlsanTcSH3NspeQPILOsfprdbPQSlA5en1VBuGtb/ACvJ8AVG7DOn43HpeOVlOM7OV6aeTl6fVBlZQpHc17uTnR9FKyi4ggjJ/PJPdOicZ2cq0DPFMzcDPQrPbTfoHkX3t+ZPzQ/EsaILzzvPyKvA51eLjzTHuIEmfM+iyX41hkZ3g8ZBHfZMbVdPxsPM5mnvhOCc01XajgYFF5HHf4JBtJp1ZUB4Fjj6SinV31Hg8mi3im1MW0mA2e8/Ja4zpnle0T9qtBj3dSNxyET3FWKeJa4SAehBB8Co/fD8p7pT2gm8OHUNS4wlp7n8j4FYO0/ailSJa0F7hwIDR1d9AVke2G1nscaAcMuTM4N+Ig2DXHdrMDkuJrVi4ye5ccrd6j1ePxTXLL/C9tnalSu5znvcWkkhk9lo3ADkN51WS+4DeEnyA+RSVHyldbwJ+nzVx39seXjvUhrdUOKYEl1auN1iciUiECoSIQdLSpCSXjnbQwdDyJjTgphBOZ14JPDtbuiNq6tDRrw4yI+fiq2Jf+602bPjNz8h0Xq+HkaAe1jZ6AeJ+SgxFQPk72gHgS06i3UJrHZ2dqQ0G5G4RvVdovmbObLmi+9xnqIQWmODg61zfjcEEx9Oaa6sBBFjfoRoJjeqrX5TO7dxH+ymxFPsteNCIPX79EVfpvc8dkX3wAOgPC08jZRtgsLd8iWgaATJAP2FQpvewyDEbuiuUamYl4s6RGuthJ5HT7ugdRrWgkxEc56DvU7KhJN5B8pgp5w7WvLyeyGmesyFnMrdqdMxsOAnefvRE21Nl7bqYd3926WnVhMtveRPwu5jXeupwG0RiRIHaHxAmHDrxHNee0nk9kmeAVltZzHZqZc0gDtN1E3AJ8Fm4tbelNwrhq9sHcZ+iQYSHS2oAOp+i8/w+PINyQ4zLpgz9Vdo7UqZh2zBN9CpxvZuO7GHfECo2ONwT9VHXwDiBlf2puSbRyWMzHmB2lMzHE2BWONXca9LDhrIe7PPMjwuqTxRkgsP63T6qs6o68FVGse91tZ4rUn7S1eOApHtNLzyDm/6U1mHpgxlf+qT4QpRst8fG0ePmpG4MgACoCd9rdybnZo1tOkBo/qSPRSsewfAG9+v0UL8G7e8d7beKids55Fnt7iYT12e1ipigD2gB98lDUxIgku7IBJvwunf2ccsOffyWH7UMbRowHy95yxpaO18vFZysxlrfjxuWcnbhtp4gvc6odXZu6XkgdwELJL7KzialoHI/fiqgufNcMZ6evy33qHDdPEFLXdJMck15koaV0+nm9XLWyBBSpFHQIStEwE59OAgjQhCDtsezs5gO0LA8JtKxsliJXQVWSL6d8+Sy8TQAdlAMmPN39Y7l668cMqMIpNE/Ecx7t3p4KDPoeFvv73LS2owBrRw03DRUKbJk6W8+ClWChMgASJmDw3jvFlcaxoJYfgJEHg790nuse5VGt3yR0T31SbnXQ2s4cwin4rDOYb3JkyL8NR4p+EpOAD2EWtBInfIPr0IU9GsHtDHSHC7SdOQ/wB1DUza5chGsAwePJEaGPohzTeN/hrPdKxDzG6w3Dgth1aQ125wg8OEeay3HjxPjolIbTZJnSLi2qu4fDy5wJgOt9DHcE2gAIJWzSxbNICzbprTK/Av0I0tKd+GIIH3K1q1QEawFA2tTaem+CpyppLhcK+J3efgtjDsIEACeO9Z9LHA6aK1SxI1WLur6XHYW0k3T6ByblA3G8044hp1V9izUx5Cp/2iQbFQ1HtVKo8aR3rUkS1rs2oVOce4/fyXOMrwYVhuLV4xOVar8UT/AE+i4v2txRdUawn4Q3/NmJPp4LfOIHHvXD7erl1Z7ucD+Xs+g81y809SPR/xv5XLqMqq5NYNT1SEqWkey7r8+K5x1y90uMohmVv72UFw3AkkgDo3LPOeCgbpdMeSdSSla+BC283/AIchI0pVl2nuHNfuIBQSOfqmIQCEIQegObKpUKPbLydLfVWHvi4+wocXVyi1p+yvZXiiKtD5LiYBPmUU8OzQDrKC4Bl7ybKOm50yFmtRpUsGw7klbCt0gBKzEhoiZKjfWkrKnVaGVtjHRQGuHS0HtRI5xuWrhmy24UGJwDS4OFouOvzTYxsNiSZY7WZb1G5RYgHLofiP9Fbxez3POZggz0E8Qp8Rs9xAda3aLZPxRaO9aGZVNr2ytDY4u1MeKgbWI3qXEUnFzgWkECQdBaNeKomRbgpRbOKdvKezFF1nH73KjNkhKg02Y4iwtb7KeNpPbYrOeARmn/mH0SsdnsdQLGfVBpN2k7irrdqgC5XOtI4qV1QIOlZi8wlQ1MWN5WGzEkCJS1a5cEGx+ICDixxWEJ1lQmpzV2adIMWOK5HEVM2vxAmesq0HZoBcQJuZi2+6p4hmVxA03dFw8t3ZHp8ONmNv0hBvfTemtJAI4pSh7Isswy38xHKe1hiVGpmHslacjGhKhCy7Y/AQhCAQrLKNtPvwSom461rfSENYCIduTmC0aJW4e87163jV8RTJcANwV2jgwBfVT02ga6oqVOCzWogNAaKalhwNyrvxQabpj8ZMQVFa7KoAUD8Q2brNOLAN1TxtYzbQiQppdth+0GhQV9oTp/usemQeqlpVw2ZF0RNial80fu26zdY9W91p4Z2bM3vHVVKjWhsG5n7+aorU6Wbeh+HI3pXgAW1nyUXvCN6gCI3qanSJBcy/Ebxz5jVVnPlLTqlpzNMFNgebpA5XHxVbmAAeNRx59FSNM8NFaFDk+k+95TG0ncE8PiygvNpB1j2Tu3jvO5RVsG5uotxUFOsQVsYeoHtjRxV2MemyJJ3A+kKjVcTqtjbFUNLBFjmDotcZYPn5rHxLwLAfVefP+T1+KyeO+/tCwXCdVeD5BJQiRPP0KjfE20TTHL16+zVNTPZKhSgrTkehNBSysu0voqcwwZiUxEou4ldWPHzQo8iFeLnyehimEhadykzBNJGmYeI9F63lROJuoQ+OKlfn5EdD9VC95i7R1BI7kFeowuBBd996ZQpubaLx5b1ZzTbLFtzr+Ysl95b4D3H7lTSqeIdy0UZqMc0R8QEXsCOq0RUBvl04j6So3tpm5aeoB3dFNLtkPeNRGl0x9bkt7DbFFb/62ki98pAB/wCYwFpUfYoH46uUb2sE+ZsPNZvpqONp4ktII++Kttp757JIN7cd/eu7w3srhWASwvI3vdPiGwD4LXw2GZTEU2MYP4GNb6BTa6eTPwNUkhlKo4cWse70CdU2LiNW4eqR/hv+i9d94j3imzTx07KrjXD1v+1U/wBKWns6sbe5qD/pv3fyr2LOjNzTZp5BRwldhkUKvA/3T7j9Ku/gqrmSKNQEbix4PS4XqWZJmTZp5KcFV30qn6H/AEVOrTImQbayCCOq9I9ssJ73DPIMGnNUXsQxrswP8pMcwF5Q5vRS00t1qZYASW9rSHNcQOeUmEyjXIMgwVXaLqSMu7vWdqs7Xr52UjN+2CN4+ECesLIKtVzIVUqVYnw9MumxMNJPISBPiR4qMsWn7PmHVDGb+6cI4yW28lRaBeReBx6H5Iv7Q5UoCkEBMRCQkypyRZdZJoiJSoKsZy6NlCMqFWHomHxbH/C6eWh8FOWg7pXI5y2Cyx4iystx1QXDj3leiZOWnRmmOA8E33LeAWIzaJ3saeJE92+6vYSqx5DAx5dwbncT3AmyvJNLbqQ4Joww3TPJbOF2DfM/s8pl30C2MPhmM+BoHPU+KlyizGufw+wXvu/sDn8X6R84WphNiUWXLc54vgjubp4ytGUmZYuVrckh+ZNlMLkzOeA8VNKnzJuZRgolUSZkmZMSIykzIzKPKoKj+CCatisotc7gko4sn4mx0Mqi88UjXmdY5cOqvGGx7V1g3CVjxYG/rc1vhdeTuK9Q9o+1hao/hB8HNJ8gvMCyVzyjRTaOScX8U1oSvEDVBDiHcFWKnqiVAs1Wt7P49tCsHVG5mFrmubEyCJEcDmDb9VSqaSo6A7QVmLrWM3NM5ZWK6Y5Svp8PD6KIhS42X23MsbPRWpSkCCsOk+BKUcE0BOhaYu77O92hJnKVX0y11q02jLSt+b0KELri55K+NEOMW/8AVegeztJooNIaATqQACep3oQmS4tFyjKELMaCRv34IQgaEIQgUJUIVZK1PQhSrEL9FVCELUKbUVbEajqkQkZo2v8A/mrf4NT/AMbl5c/RKhZrUR1N3VNqoQsVTGqJyEKKsYH4x971M74j1Qha8f8AKs+T+M/uQqCohC6ZfDnh8mpChC87134InIQqzPgqEIWnN//Z"
    },
    {
      id: 8,
      image: 'https://nikonrumors.com/wp-content/uploads/2014/03/Nikon-1-V3-sample-photo.jpg',
    },
    {
      id: 9,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0G4Jj47yiz5zOPtf3AAha0jxUcoX4SAo_Gw&usqp=CAU',
    },
    {
      id: 10,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThZt8U7eupYaG534vnIZHksoqQPIm9DTSA2w&usqp=CAU"
    },
    {
      id: 11,
      image: "https://cdn.explorecams.com/storage/photos/LEFEikw0MR_1600.jpg"
    },
    {
      id: 12,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7rp3BWpUNLrwIFx49D5G05hg6J77pZDAScg&usqp=CAU"
    }

  ]
  return (
    <div className='px-10 flex flex-col'>
      <div className='mx-auto text-white text-xl'>Featuring 2022 Teams</div>
      <div className='mt-5 mb-10 grid grid-cols-10'>
        <div className='col-span-10'>
          <TeamCarousel teams={teams} />
        </div>
      </div>
    </div>
  )
}

export default FeaturedTeams