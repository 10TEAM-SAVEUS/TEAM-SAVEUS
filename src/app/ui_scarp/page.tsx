import ReportBox from "@/components/common/ReportBox";
import DetectedTitle from "@/components/common/DetectedTitle";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import LibraryList from "@/components/common/LibraryList";
import AddButton from "@/components/common/AddButton";

export default function page() {
  return (
    <>
      <Header />
      <DetectedTitle />
      <LibraryList />
      <ReportBox />
      <AddButton />
      <Footer />
    </>
  );
}
