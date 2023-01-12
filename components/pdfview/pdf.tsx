/* eslint-disable no-lone-blocks */
/* eslint-disable jsx-a11y/alt-text */
import {
  Document,
  Page,
  View,
  Text,
  Image,
  PDFViewer,
  StyleSheet,
  Font,
} from '@react-pdf/renderer';
import React, { useState, useEffect } from 'react';

Font.register({
  family: 'MontserratAlt1',
  src: '/Montserrat/fonts/otf/MontserratAlt1-Bold.otf',
});

const styles = StyleSheet.create({
  body: {
    paddingTop: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  image: {
    width: 500,
    height: 100,
    marginBottom: 20,
  },
  subtitle: {
    margin: 15,
    fontSize: 24,
    fontFamily: 'MontserratAlt1',
    left: -15,
  },
});

const DataMapper = (deserialisedDataString: any) => {
  const keys = Object.keys(deserialisedDataString);
  const objectList: any[] = [];

  // eslint-disable-next-line no-restricted-syntax
  let counter = 0;
  // eslint-disable-next-line no-restricted-syntax
  for (const key of keys) {
    const data = deserialisedDataString[key];
    const lowData = Object.values(data);
    console.log('Lowlevel Data', lowData);

    const goalUI = lowData.map((item: any) => typeof item === 'string' && <Text>- {item}</Text>);
    if (goalUI.length > 0) {
      objectList.push(
        <View style={{ left: `${-(counter * 3) - 190}` }}>
          <Text style={styles.subtitle}>{key}</Text>
          {goalUI}
        </View>
      );
    } else {
      objectList.push(null);
    }

    // eslint-disable-next-line no-plusplus
    counter++;
  }
  counter = 0;
  return objectList;
};

const PDF = ({ deserialisedDataString }: { deserialisedDataString: any }) => {
  const MappedData = DataMapper(deserialisedDataString);
  return (
    <Document>
      <Page style={styles.body}>
        <Image src="/updatedLogoWithSlogan.png" style={styles.image} />
        {MappedData}
      </Page>
    </Document>
  );
};
const PDFView = () => {
  const [data, setData] = useState<any>('No data provided');

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem('goals') || data));
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      {data !== 'No data provided' && (
        <PDFViewer>
          <PDF deserialisedDataString={data} />
        </PDFViewer>
      )}
    </>
  );
};
export default PDFView;
