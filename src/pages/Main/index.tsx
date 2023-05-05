import {
  ReactElement,
  useState,
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
} from "react";
import { FaGithub, FaPlus, FaSpinner, FaBars, FaTrash } from "react-icons/fa";
import { Container, Form, SubmitButton, List, DeleteButton } from "./styles";
import api from "../../services/api";
import { Link } from "react-router-dom";
import { TypeNameRepositorio } from "../../types/types";

const Main = (): ReactElement => {
  const [newRepo, setNewRepo] = useState<string>("");
  const [repositorios, setRepositorios] = useState<
    TypeNameRepositorio[] | null
  >(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [alert, setAlert] = useState<boolean>(false);

  useEffect(() => {
    const repos = localStorage.getItem("repos");
    if (repos) {
      setRepositorios(JSON.parse(repos));
    }
  }, []);

  useEffect(() => {
    if (repositorios !== null)
      localStorage.setItem("repos", JSON.stringify(repositorios));
  }, [repositorios]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setNewRepo(e.target.value);
    setAlert(false);
  };

  const handleSubmit = useCallback(
    (e: FormEvent): void => {
      e.preventDefault();

      async function submit(): Promise<void> {
        try {
          if (!newRepo) {
            throw new Error("Digite o repositporio");
          }
          setLoading(true);
          const response = await api.get(`repos/${newRepo}`);
          let hasRepo = null;
          if (Array.isArray(repositorios)) {
            hasRepo = repositorios.find(
              (r) => r.name === response.data.full_name
            );
          }

          if (hasRepo) {
            throw new Error("Repositório duplicado");
          }
          const data = {
            name: response.data.full_name,
          };
          setRepositorios(
            Array.isArray(repositorios) ? [...repositorios, data] : [data]
          );
          setNewRepo("");
        } catch (error) {
          console.log(error);
          setAlert(true);
        } finally {
          setLoading(false);
        }
      }

      submit();
    },
    [newRepo, repositorios]
  );

  const handleDelete = useCallback(
    (name: string): void => {
      const find = Array.from(repositorios as TypeNameRepositorio[]).filter(
        (r) => r.name !== name
      );
      setRepositorios(find);
    },
    [repositorios]
  );

  return (
    <Container>
      <h1>
        <FaGithub size={25} />
        Meus repositorios
      </h1>
      <Form onSubmit={handleSubmit} error={alert}>
        <input
          type="text"
          placeholder="Adicionar Repositórios"
          onChange={handleInputChange}
          value={newRepo}
        />

        <SubmitButton type="submit" disabled={loading}>
          {loading ? (
            <FaSpinner color="#FFF" size={14} />
          ) : (
            <FaPlus color="#FFF" size={14} />
          )}
        </SubmitButton>
      </Form>
      <List>
        {Array.isArray(repositorios) &&
          repositorios.map((repo) => (
            <li key={repo.name}>
              <span>
                <DeleteButton
                  type="button"
                  onClick={() => handleDelete(repo.name)}
                >
                  <FaTrash size={14} />
                </DeleteButton>
                {repo.name}
              </span>
              <Link to={`/repositorio/${encodeURIComponent(repo.name)}`}>
                <FaBars size={20} />
              </Link>
            </li>
          ))}
      </List>
    </Container>
  );
};

export default Main;
