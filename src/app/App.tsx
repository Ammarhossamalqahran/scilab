import { Navigate, Route, Routes } from 'react-router-dom';
import { AppShell } from '../components/AppShell';
import { HomePage } from '../pages/HomePage';
import { MicroscopePage } from '../pages/MicroscopePage';
import { ExamPage } from '../pages/ExamPage';
import { SchemasPage } from '../pages/SchemasPage';
import { SchemaStudyPage } from '../pages/SchemaStudyPage';

export function App() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route index element={<HomePage />} />
        <Route path="microscope" element={<MicroscopePage />} />
        <Route path="exams" element={<ExamPage />} />
        <Route path="schemas" element={<SchemasPage />} />
        <Route path="schemas/:diagramId" element={<SchemaStudyPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
