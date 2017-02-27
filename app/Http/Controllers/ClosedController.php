<?php

namespace App\Http\Controllers;

use App\Closed;
use App\Http\Requests;
use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Model;

/**
 * Supercontroller for all 'closed' classes: Glosses, Slots, and Groups
 *
 * Method names differ from standard REST because of the difference in argument structure.
 */
abstract class ClosedController extends Controller
{
    protected $model;
    protected $items;

    /**
     * Show the list of items.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // These will have been set by the subclass
        $items = $this->items;
        $model = $this->model;

        return view('closed.index', compact('items', 'model'));
    }

    /**
     * Show the item detail page
     *
     * @return \Illuminate\Http\Response
     */
    public function showItem(Model $item)
    {
        $item->load($item->getRelationList());

        return view('closed.show', compact('item'));
    }

    /**
     * Show the item edit page
     *
     * @param Illuminate\Database\Eloquent\Model
     * @return \Illuminate\Http\Response
     */
    public function editItem(Model $item)
    {
        return view('closed.edit', compact('item'));
    }

    /**
     * Update the item and redirect back to the detail page
     *
     * @param Illuminate\Http\Request
     * @param Illuminate\Database\Eloquent\Model
     * @return \Illuminate\Http\Response
     */
    public function updateItem(Request $request, Model $item)
    {
        $item->update($request->all());

        $display = $this->getDisplay($item);

        flash("$display updated successfully", "is-success");
        return redirect('/'.strtolower($item->plural)."/{$item->id}");
    }

    /**
     * Destroy the item and redirect back to the index
     *
     * @param Illuminate\Database\Eloquent\Model
     * @return \Illuminate\Http\Response
     */
    public function destroyItem(Model $item)
    {
        $item->delete();

        $display = $this->getDisplay($item);
        
        flash("$display deleted successfully.", 'is-info');

        return redirect('/'.strtolower($item->plural));
    }

    /**
     * Determine how the model should be displayed
     *
     * Will use the abv if it exists; otherwise, will default back to the name
     *
     * @param Illuminate\Database\Eloquent\Model
     * @return string
     */
    protected function getDisplay(Model $item)
    {
        if ($item->abv) {
            return $item->abv;
        } else {
            return $item->name;
        }
    }

    /**
     * Set the name of the model
     *
     * @param string The name of the model
     * @return void
     */
    public function setModel($name)
    {
        $this->model = $name;
    }

    /**
     * Set the list of items
     *
     * @param Illuminate\Database\Eloquent\Collection
     * @return void
     */
    public function setItems($items)
    {
        $this->items = $items;
    }
}
