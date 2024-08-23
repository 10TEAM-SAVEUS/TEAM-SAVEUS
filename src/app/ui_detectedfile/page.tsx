import ClippingTitle from "@/components/common/ClippingTitle";
import DataBox from "@/components/common/DataBox";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import LibraryList from "@/components/common/LibraryList";

export default function page() {
  return (
    <>
      <Header />
      <ClippingTitle />
      <LibraryList />
      <DataBox />

      <Footer />
    </>
  );
}
