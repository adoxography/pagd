<?php

namespace App\Observers;

use App\Models\Group;

class GroupObserver {

	public function deleting(Group $group)
	{
		if($group->parent) {
			foreach($group->languages as $language) {
				$language->update(['group_id' => $group->parent_id]);
			}
		}
	}

}
