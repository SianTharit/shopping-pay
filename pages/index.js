import axios from "axios";
import Footer from "../components/footer";
import Header from "../components/header";

export default function Home({ country }) {
  return (
    <dix>
      <Header country={country} />
      <Footer country={country} />
    </dix>
  );
}

export async function getServerSideProps() {
  let data = await axios
    .get("https://api.ipregistry.co/66.165.2.7?key=aymrul2n4n2kt8dw")
    .then((res) => {
      return res.data.location.country;
    })
    .catch((err) => {
      console.log(err);
    });
  return {
    props: {
      // country: { name: data.name, flag: data.flag.emojitwo },
      country: {
        name: "United States",
        flag: "https://cdn.ipregistry.co/flags/emojitwo/us.svg",
      },
    },
  };
}
