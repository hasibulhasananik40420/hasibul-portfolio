import AboutMe from "@/components/Ui/AboutMe"
import Banner from "@/components/Ui/Banner"
import ClientReviews from "@/components/Ui/ClientReviews"
import ContactUs from "@/components/Ui/ContactUs"
import HappyClient from "@/components/Ui/HappyClient"
import MyProjects from "@/components/Ui/MyProjects"
import Services from "@/components/Ui/Services"
import SocialMedia from "@/components/Ui/SocialMedia"


const HomePage = () => {
  return (
    <div>
      <Banner/>
      <AboutMe/>
      <Services/>
      <MyProjects/>
      <ClientReviews/>
      <HappyClient/>
      <SocialMedia/>
      <ContactUs/>
    </div>
  )
}

export default HomePage