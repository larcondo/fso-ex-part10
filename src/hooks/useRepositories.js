import { useEffect, useState } from 'react';
const baseUrl = 'http://192.168.100.21:5000';

const useRepositories = () => {
  const [repositories, setRepositories] = useState();
  const [loading, setLoading] = useState(false);

  const fetchRepositories = async () => {
    setLoading(true);

    const response = await fetch(`${baseUrl}/api/repositories`);
    const json = await response.json();

    // console.log(json);

    setLoading(false);
    setRepositories(json);
  };

  useEffect(() => {
    fetchRepositories();
  }, []);

  return {
    repositories,
    loading,
    refetch: fetchRepositories
  };
};

export default useRepositories;