import ClientReviews from "@/components/Ui/ClientReviews"
import ContactUs from "@/components/Ui/ContactUs"
import HappyClient from "@/components/Ui/HappyClient"
import SocialMedia from "@/components/Ui/SocialMedia"


const HomePage = () => {
  return (
    <div>
      <ClientReviews/>
      <HappyClient/>
      <SocialMedia/>
      <ContactUs/>
    </div>
  )
}

export default HomePage