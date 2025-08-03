import ResourceForm from '../components/resource/ResourceForm';
import ResourceList from '../components/resource/ResourceList';

function Achievements() {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Upload Resource</h2>
      <ResourceForm />
      <h3 className="text-lg font-semibold mt-6">Uploaded Resources</h3>
      <ResourceList />
    </div>
  );
}

export default Achievements