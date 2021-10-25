import Head from 'next/head';
import Header from '../components/Header';
import Banner from '../components/Banner';
import SmallCard from '../components/SmallCard';

export default function Home({exploreData}) {
  return (
    <div>
      <Head>
        <title>Air Bnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Banner/>
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
            <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>

            {exploreData?.map((item)=>(
              <SmallCard key={item.img} img={item.img} distance={item.distance} location={item.location}/>
            ))}
        </section>
      </main>
    </div>
  )
}

export async function getStaticProps(){
  const exploreData = await fetch("https://links.papareact/pyp").then((res)=>res.json());

  return{
    props: {
      exploreData,
    }
  }
}