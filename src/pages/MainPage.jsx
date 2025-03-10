import ClientsSection from "../components/clients-section/ClientsSection";
import LearnMoreSection from "../components/learn-more-section/LearnMoreSection";
import MainSection from "../components/main-section/MainSection";
import MembershipSection from "../components/membership-section/MembershipSection";

export default function MainPage() {
    return (
        <>
            <MainSection />
            <ClientsSection />
            <MembershipSection />
            <LearnMoreSection />
        </>
    )
}