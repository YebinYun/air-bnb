"use client";
import { Box, Stack } from "@mui/material";
import { styled } from "@mui/system";
import Image from "next/image";

type HostInfoProps = {
  data: any;
  isImgError: boolean;
  setIsImgError: (props: boolean) => void;
};

const HostInfoComponent = ({
  data,
  isImgError,
  setIsImgError,
}: HostInfoProps) => {
  return (
    <Box>
      <BlockLayout>
        <Image
          src={
            isImgError ? "/images/noUser.webp" : data?.host?.host_picture_url
          }
          alt="host_photo"
          onError={() => setIsImgError(true)}
          width="50"
          height="50"
          style={{ borderRadius: "50px", marginRight: "1rem" }}
        />
        <Stack>
          <Box
            sx={{ fontSize: "1.2rem", fontWeight: "bold", mb: "0.2rem" }}
          >{`${data?.host?.host_name}`}</Box>
          <HostText>{`Location : ${data?.host?.host_location}`}</HostText>
          <HostText>{`About me : ${
            data?.host?.host_about === ""
              ? "No Comment"
              : data?.host?.host_about
          }`}</HostText>
        </Stack>
      </BlockLayout>
    </Box>
  );
};

export default HostInfoComponent;

export const BlockLayout = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
  padding: 1rem;
  border-radius: 10px;
  background: #ffffffbb;
`;

const HostText = styled(Box)`
  font-size: 1rem;
  margin: 0 0.1rem;
  max-height: 1.2rem;
  overflow-y: auto;
`;
