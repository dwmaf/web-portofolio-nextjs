import { NextResponse } from 'next/server';
import { TfIdf } from 'natural';
import cosineSimilarity from 'compute-cosine-similarity';

const documents = [
  "Sistem Informasi Manajemen Rumah Sakit. Sistem ini dirancang untuk mengelola data pasien, rekam medis, dan jadwal dokter.",
  "Pengaruh Teknologi Blockchain dalam E-Commerce. Studi ini mengevaluasi keandalan blockchain dalam transaksi online.",
  "Analisis Sentimen Media Sosial dengan Deep Learning. Penelitian ini mengidentifikasi opini publik dari Twitter menggunakan LSTM.",
  "Penerapan Algoritma Genetika dalam Pemrograman. Algoritma genetika digunakan untuk menyelesaikan masalah optimasi kompleks.",
  "Sistem Rekomendasi Produk Menggunakan Machine Learning. Penelitian memanfaatkan data histori pengguna untuk rekomendasi cerdas.",
  "Dampak Kebijakan Lingkungan terhadap Perusahaan. Studi ini fokus pada regulasi dan tanggung jawab sosial perusahaan.",
  "Perancangan Website E-Commerce Produk Elektronik. Situs dibuat dengan fitur keranjang belanja dan integrasi pembayaran.",
  "Studi Startup Teknologi terhadap Ekonomi Digital. Kajian terhadap peran startup dalam pertumbuhan ekonomi Indonesia.",
  "Implementasi AI dalam Dunia Pendidikan. Sistem cerdas digunakan untuk pembelajaran adaptif dan evaluasi otomatis.",
  "Optimasi Rantai Pasokan menggunakan Big Data. Analisis data besar digunakan untuk efisiensi distribusi produk.",
  "Sistem Monitoring Kesehatan IoT. Alat wearable digunakan untuk mencatat data kesehatan secara real time.",
  "Pemanfaatan Augmented Reality dalam Edukasi. AR diterapkan untuk meningkatkan pemahaman siswa pada pelajaran sains.",
  "Aplikasi Mobile untuk Layanan Kesehatan. Pengguna dapat berkonsultasi langsung dengan dokter via aplikasi.",
  "Analisis Keamanan Siber pada Sistem Informasi. Studi tentang ancaman dan mitigasi pada sistem berbasis web.",
  "Pemodelan Cuaca Menggunakan Machine Learning. Teknik prediksi cuaca berbasis model regresi dan neural network.",
  "Manajemen Proyek TI Menggunakan Scrum. Studi kasus penggunaan framework Scrum dalam pengembangan aplikasi.",
  "Klasifikasi Berita Online Menggunakan NLP. Penelitian mengelompokkan berita politik, ekonomi, dan hiburan.",
  "Pengenalan Wajah untuk Sistem Absensi. Kamera dengan AI digunakan untuk mencatat kehadiran secara otomatis.",
  "Deteksi Penyakit Dini dengan Citra Medis. CNN digunakan untuk klasifikasi gambar hasil rontgen dan MRI.",
  "Sistem Pakar Diagnosis Penyakit Tumbuhan. Sistem berbasis aturan ini membantu petani mendiagnosis gangguan tanaman."
];

const tfidf = new TfIdf();
documents.forEach(doc => tfidf.addDocument(doc));

// Mendapatkan semua fitur unik
const allTerms = new Set();
documents.forEach((doc, i) => {
  tfidf.listTerms(i).forEach(item => allTerms.add(item.term));
});
const termsArray = Array.from(allTerms);

// Fungsi untuk mendapatkan vektor TF-IDF dokumen
function getTfidfVector(docIndex) {
  const vec = new Array(termsArray.length).fill(0);
  const termMap = new Map(tfidf.listTerms(docIndex).map(item => [item.term, item.tfidf]));
  termsArray.forEach((term, i) => {
    vec[i] = termMap.get(term) || 0;
  });
  return vec;
}

export async function POST(req) {
  const { inputText } = await req.json();
  tfidf.addDocument(inputText);
  const inputVector = getTfidfVector(tfidf.documents.length - 1);

  const similarities = documents.map((_, i) => {
    const docVector = getTfidfVector(i);
    const score = cosineSimilarity(inputVector, docVector);
    return { index: i, score };
  });

  similarities.sort((a, b) => b.score - a.score);
  const top3 = similarities.slice(0, 3).map(({ index, score }) => ({
    doc: documents[index],
    score: score.toFixed(4)
  }));

  return NextResponse.json(top3);
}
// // Teks input pengguna
// const inputText = "sistem rekomendasi menggunakan machine learning untuk produk";

// // Tambahkan input sebagai dokumen ke-20 (index terakhir)
// tfidf.addDocument(inputText);
// const inputVector = getTfidfVector(tfidf.documents.length - 1);

// // Hitung cosine similarity dengan semua dokumen
// const similarities = documents.map((_, i) => {
//   const docVector = getTfidfVector(i);
//   const score = cosineSimilarity(inputVector, docVector);
//   return { index: i, score };
// });

// // Urutkan berdasarkan skor tertinggi
// similarities.sort((a, b) => b.score - a.score);

// // Tampilkan 3 dokumen paling mirip
// console.log("Top 3 dokumen mirip:");
// for (let i = 0; i < 3; i++) {
//   const { index, score } = similarities[i];
//   console.log(`Dokumen ${index + 1}: Skor = ${score.toFixed(4)}`);
//   console.log(documents[index]);
//   console.log("—".repeat(50));
// }