// src/sanityClient.js

import { createClient } from '@sanity/client';

const sanityClient = createClient({
  projectId: '7ftzdq2d',     // ✅ tumhara actual project ID
  dataset: 'production',     // ✅ agar tumne default dataset use kiya hai
  apiVersion: '2023-01-01',  // ✅ Sanity API version (koi recent date rakhni hoti hai)
  useCdn: true,              // ✅ true means cached data for faster load (fine for public blog)
});

export default sanityClient;
