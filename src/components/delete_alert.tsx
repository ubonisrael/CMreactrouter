import { TrashIcon } from "@radix-ui/react-icons";
import { AlertDialog, Button, Flex } from "@radix-ui/themes";
import { Form } from "react-router-dom";

const DeleteAlert = ({action}: {action?: string}) => (
  <AlertDialog.Root>
    <AlertDialog.Trigger>
      <Button color="red"><TrashIcon/> Delete</Button>
    </AlertDialog.Trigger>
    <AlertDialog.Content style={{ maxWidth: 450 }}>
      <AlertDialog.Title>Delete Contact</AlertDialog.Title>
      <AlertDialog.Description size="2">
        Are you sure? This contact(s) will be permanently removed from your contacts.
      </AlertDialog.Description>

      <Flex gap="3" mt="4" justify="end">
        <AlertDialog.Cancel>
          <Button variant="soft" color="gray">
            Cancel
          </Button>
        </AlertDialog.Cancel>
        <AlertDialog.Action>
        <Form method="post" action={`${action ? action : "delete"}`}>
          <Button variant="solid" color="red">
            Delete
          </Button>
          </Form>
        </AlertDialog.Action>
      </Flex>
    </AlertDialog.Content>
  </AlertDialog.Root>
)

export default DeleteAlert;