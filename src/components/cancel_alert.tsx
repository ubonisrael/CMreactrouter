import { AlertDialog, Button, Flex } from "@radix-ui/themes";
import { useNavigate } from "react-router-dom";

const CancelAlert = () => {
  const navigate = useNavigate();

  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>
        <Button color="red">
            Cancel
        </Button>
      </AlertDialog.Trigger>
      <AlertDialog.Content style={{ maxWidth: 450 }}>
        <AlertDialog.Title>Delete Contact</AlertDialog.Title>
        <AlertDialog.Description size="2">
          Are you sure? The changes made will not be saved.
        </AlertDialog.Description>
        <Flex gap="3" mt="4" justify="end">
          <AlertDialog.Cancel>
            <Button variant="soft" color="gray">
              Continue
            </Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action>
            <Button onClick={() => navigate(-1)} variant="solid" color="red">
              Cancel
            </Button>
          </AlertDialog.Action>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
};

export default CancelAlert;
