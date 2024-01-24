import { Box, Button, Stack } from "@mui/material";
import Image from "next/image";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/system";

const HostInfoModal = ({
  data,
  isModalOpen,
  setIsModalOpen,
  isImgError,
  setIsImgError,
}: any) => {
  return (
    <Container>
      <Button
        sx={{ position: "absolute", top: "2rem", right: "2rem" }}
        onClick={() => {
          setIsModalOpen(!isModalOpen);
          setIsImgError(false);
        }}
      >
        <CloseIcon sx={{ color: "white" }} />
      </Button>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Stack direction="row" alignItems="center">
          <Image
            src={
              isImgError ? "/images/noUser.webp" : data?.host?.host_picture_url
            }
            alt="host_photo"
            onError={() => setIsImgError(true)}
            width="100"
            height="100"
            style={{ borderRadius: "50px", marginRight: "1rem" }}
          />
          <Stack>
            <Box
              sx={{ fontSize: "1.5rem", fontWeight: "bold", mb: "0.5rem" }}
            >{`${data?.host?.host_name}`}</Box>
            <Box>{`Location: ${data?.host?.host_location}`}</Box>
            <Box>{`About me: ${data?.host?.host_about}`}</Box>
          </Stack>
        </Stack>
        <div>{data?.host?.host_neiborhood}</div>
      </Box>
    </Container>
  );
};

export default HostInfoModal;

const Container = styled(Box)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  background: #000000dd;
  z-index: 100;
  color: white;
  display: flex;
  justify-content: center;
`;
